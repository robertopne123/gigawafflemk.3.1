import { useState, useContext, useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
import cx from "classnames";

import YourOrder from "./yourOrder";
import PaymentModes from "./paymentModes";
import { AppContext } from "./shop/context";
import validateAndSanitizeCheckoutForm from "./validateCheckout";
import { getFormattedCart, createCheckoutData } from "./functions";
import OrderSuccess from "./orderSuccess";
import GET_CART from "./queries/get-cart";
import CHECKOUT_MUTATION from "./mutations/checkout";
import Address from "./address";
import {
  handleBillingDifferentThanShipping,
  handleCreateAccount,
  handleStripeCheckout,
  setStatesForCountry,
} from "./utils/checkout";
import CheckboxField from "./fields/checkoutField";
import CLEAR_CART_MUTATION from "./mutations/clear-cart";
import client from "../lib/apollo";

// Use this for testing purposes, so you dont have to fill the checkout form over an over again.
// const defaultCustomerInfo = {
// 	firstName: 'Imran',
// 	lastName: 'Sayed',
// 	address1: '123 Abc farm',
// 	address2: 'Hill Road',
// 	city: 'Mumbai',
// 	country: 'IN',
// 	state: 'Maharastra',
// 	postcode: '221029',
// 	email: 'codeytek.academy@gmail.com',
// 	phone: '9883778278',
// 	company: 'The Company',
// 	errors: null
// }

const defaultCustomerInfo = {
  firstName: "",
  lastName: "",
  address1: "",
  address2: "",
  city: "",
  country: "",
  state: "",
  postcode: "",
  email: "",
  phone: "",
  company: "",
  errors: null,
};

const CheckoutForm = ({ countriesData }) => {
  const { billingCountries, shippingCountries } = countriesData || {};

  const initialState = {
    billing: {
      ...defaultCustomerInfo,
    },
    shipping: {
      ...defaultCustomerInfo,
    },
    createAccount: false,
    orderNotes: "",
    billingDifferentThanShipping: false,
    paymentMethod: "cod",
  };

  const [cart, setCart] = useContext(AppContext);
  const [input, setInput] = useState(initialState);
  const [orderData, setOrderData] = useState(null);
  const [requestError, setRequestError] = useState(null);
  const [theShippingStates, setTheShippingStates] = useState([]);
  const [isFetchingShippingStates, setIsFetchingShippingStates] =
    useState(false);
  const [theBillingStates, setTheBillingStates] = useState([]);
  const [isFetchingBillingStates, setIsFetchingBillingStates] = useState(false);
  const [isStripeOrderProcessing, setIsStripeOrderProcessing] = useState(false);
  const [createdOrderData, setCreatedOrderData] = useState({});

  // Get Cart Data.
  const { data } = useQuery(GET_CART, {
    notifyOnNetworkStatusChange: true,
    client: client,
    onCompleted: () => {
      // Update cart in the localStorage.
      const updatedCart = getFormattedCart(data);
      localStorage.setItem("woo-next-cart", JSON.stringify(updatedCart));

      // Update cart data in React Context.
      setCart(updatedCart);
    },
  });

  // Create New order: Checkout Mutation.
  const [checkout, { data: checkoutResponse, loading: checkoutLoading }] =
    useMutation(CHECKOUT_MUTATION, {
      variables: {
        input: orderData,
      },
      client: client,
      onError: (error) => {
        if (error) {
          setRequestError(error?.graphQLErrors?.[0]?.message ?? "");
        }
      },
    });

  const [clearCartMutation] = useMutation(CLEAR_CART_MUTATION, {
    client: client,
  });

  /*
   * Handle form submit.
   *
   * @param {Object} event Event Object.
   *
   * @return {void}
   */
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    console.log(event);

    /**
     * Validate Billing and Shipping Details
     *
     * Note:
     * 1. If billing is different than shipping address, only then validate billing.
     * 2. We are passing theBillingStates?.length and theShippingStates?.length, so that
     * the respective states should only be mandatory, if a country has states.
     */
    const billingValidationResult = input?.billingDifferentThanShipping
      ? validateAndSanitizeCheckoutForm(
          input?.billing,
          theBillingStates?.length
        )
      : { errors: null, isValid: true };
    const shippingValidationResult = validateAndSanitizeCheckoutForm(
      input?.shipping,
      theShippingStates?.length
    );

    if (!shippingValidationResult.isValid || !billingValidationResult.isValid) {
      console.log(shippingValidationResult);
      console.log(billingValidationResult);
      setInput({
        ...input,
        billing: { ...input.billing, errors: billingValidationResult.errors },
        shipping: {
          ...input.shipping,
          errors: shippingValidationResult.errors,
        },
      });

      return;
    }

    if ("stripe-mode" === input.paymentMethod) {
      const createdOrderData = await handleStripeCheckout(
        input,
        cart?.products,
        setRequestError,
        clearCartMutation,
        setIsStripeOrderProcessing,
        setCreatedOrderData
      );
      return null;
    }

    const checkOutData = createCheckoutData(input);
    setRequestError(null);
    /**
     *  When order data is set, checkout mutation will automatically be called,
     *  because 'orderData' is added in useEffect as a dependency.
     */
    setOrderData(checkOutData);
  };

  /*
   * Handle onchange input.
   *
   * @param {Object} event Event Object.
   * @param {bool} isShipping If this is false it means it is billing.
   * @param {bool} isBillingOrShipping If this is false means its standard input and not billing or shipping.
   *
   * @return {void}
   */
  const handleOnChange = async (
    event,
    isShipping = false,
    isBillingOrShipping = false
  ) => {
    const { target } = event || {};

    if ("createAccount" === target.name) {
      handleCreateAccount(input, setInput, target);
    } else if ("billingDifferentThanShipping" === target.name) {
      handleBillingDifferentThanShipping(input, setInput, target);
    } else if (isBillingOrShipping) {
      if (isShipping) {
        await handleShippingChange(target);
      } else {
        await handleBillingChange(target);
      }
    } else {
      const newState = { ...input, [target.name]: target.value };
      setInput(newState);
    }
  };

  const handleShippingChange = async (target) => {
    const newState = {
      ...input,
      shipping: { ...input?.shipping, [target.name]: target.value },
    };
    setInput(newState);
  };

  const handleBillingChange = async (target) => {
    const newState = {
      ...input,
      billing: { ...input?.billing, [target.name]: target.value },
    };
    setInput(newState);
    await setStatesForCountry(
      target,
      setTheBillingStates,
      setIsFetchingBillingStates
    );
  };

  useEffect(async () => {
    if (null !== orderData) {
      // Call the checkout mutation when the value for orderData changes/updates.
      await checkout();
    }
  }, [orderData]);

  // Loading state
  const isOrderProcessing = checkoutLoading || isStripeOrderProcessing;

  return (
    <>
      {cart ? (
        <form
          onSubmit={handleFormSubmit}
          className="woo-next-checkout-form max-w-[1250px] mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div>
              {/*Shipping Details*/}
              <div className="billing-details flex flex-col gap-2">
                <h2 className="font-medium mb-2 text-2xl font-parkson">
                  Shipping Details
                </h2>
                <Address
                  states={theShippingStates}
                  countries={shippingCountries}
                  input={input?.shipping}
                  handleOnChange={(event) => handleOnChange(event, true, true)}
                  isFetchingStates={isFetchingShippingStates}
                  isShipping
                  isBillingOrShipping
                />
              </div>
              <div>
                <CheckboxField
                  name="billingDifferentThanShipping"
                  type="checkbox"
                  checked={input?.billingDifferentThanShipping}
                  handleOnChange={handleOnChange}
                  label="Billing address different than shipping"
                  containerClassNames="mb-4 pt-4 font-poppins text-sm"
                />
              </div>
              {/*Billing Details*/}
              {input?.billingDifferentThanShipping ? (
                <div className="billing-details">
                  <h2 className="text-xl font-medium mb-4">Billing Details</h2>
                  <Address
                    states={theBillingStates}
                    countries={billingCountries}
                    input={input?.billing}
                    handleOnChange={(event) =>
                      handleOnChange(event, false, true)
                    }
                    isFetchingStates={isFetchingBillingStates}
                    isShipping={false}
                    isBillingOrShipping
                  />
                </div>
              ) : null}
            </div>
            {/* Order & Payments*/}
            <div className="your-orders">
              {/*	Order*/}
              <h2 className="font-medium text-2xl mb-4 font-parkson">
                Your Order
              </h2>
              <YourOrder cart={cart} />

              {/*Payment*/}
              <PaymentModes input={input} handleOnChange={handleOnChange} />

              <div className="woo-next-place-order-btn-wrap mt-5">
                <button
                  disabled={isOrderProcessing}
                  className={cx(
                    "bg-gigapink text-white px-5 py-3 w-auto xl:w-full font-poppins uppercase",
                    { "opacity-50": isOrderProcessing }
                  )}
                  type="submit"
                >
                  Place Order
                </button>
              </div>

              {/* Checkout Loading*/}
              {isOrderProcessing && <p>Processing Order...</p>}
              {requestError && <OrderSuccess response={checkoutResponse} />}
            </div>
          </div>
        </form>
      ) : null}
      {/*	Show message if Order Success*/}
      <OrderSuccess response={checkoutResponse} />
    </>
  );
};

export default CheckoutForm;
