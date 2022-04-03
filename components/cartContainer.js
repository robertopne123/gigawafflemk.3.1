import { useContext } from "react";
import { AppContext } from "./shop/context";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import GET_CART from "./queries/get-cart";
import UPDATE_CART from "./mutations/add-to-cart";
import CLEAR_CART_MUTATION from "./mutations/clear-cart";
import { getFormattedCart } from "./functions";
import { useMutation } from "@apollo/client";
import Link from "next/link";
import CartItem from "./cartItem";

const CartContainer = () => {
  const [cart, setCart] = useContext(AppContext);
  const [requestError, setRequestError] = useState(null);

  // Get Cart Data.
  const { loading, error, data, refetch } = useQuery(GET_CART, {
    notifyOnNetworkStatusChange: true,
    onCompleted: () => {
      // Update cart in the localStorage.
      const updatedCart = getFormattedCart(data);
      localStorage.setItem("woo-next-cart", JSON.stringify(updatedCart));

      // Update cart data in React Context.
      //setCart(updatedCart);
    },
  });

  // Update Cart Mutation.
  const [
    updateCart,
    {
      data: updateCartResponse,
      loading: updateCartProcessing,
      error: updateCartError,
    },
  ] = useMutation(UPDATE_CART, {
    onCompleted: () => {
      refetch();
    },
    onError: (error) => {
      if (error) {
        const errorMessage = error?.graphQLErrors?.[0]?.message
          ? error.graphQLErrors[0].message
          : "";
        setRequestError(errorMessage);
      }
    },
  });

  // Update Cart Mutation.
  const [
    clearCart,
    { data: clearCartRes, loading: clearCartProcessing, error: clearCartError },
  ] = useMutation(CLEAR_CART_MUTATION, {
    onCompleted: () => {
      refetch();
    },
    onError: (error) => {
      if (error) {
        const errorMessage = !isEmpty(error?.graphQLErrors?.[0])
          ? error.graphQLErrors[0]?.message
          : "";
        setRequestError(errorMessage);
      }
    },
  });

  const handleRemoveProductClick = (event, cartKey, products) => {
    event.stopPropagation();
    if (products.length) {
      // By passing the newQty to 0 in updateCart Mutation, it will remove the item.
      const newQty = 0;
      const updatedItems = getUpdatedItems(products, newQty, cartKey);

      updateCart({
        variables: {
          input: {
            clientMutationId: v4(),
            items: updatedItems,
          },
        },
      });
    }
  };

  const handleClearCart = (event) => {
    event.stopPropagation();

    if (clearCartProcessing) {
      return;
    }

    clearCart({
      variables: {
        input: {
          clientMutationId: v4(),
          all: true,
        },
      },
    });
  };

  return (
    <div className="cart product-cart-container mx-auto my-4 px-4 xl:px-0">
      {cart ? (
        <div className="woo-next-cart-wrapper">
          <div className="cart-header flex flex-row gap-4 justify-between border-b-2 border-gray-400">
            <h1 className="text-2xl uppercase font-poppins font-bold px-4 pb-4">
              Cart
            </h1>
            {/*Clear entire cart*/}
            <div className="clear-cart text-right sm:w-[200px] px-4">
              <button
                className="px-4 py-1 bg-gigapink text-white uppercase font-poppins w-auto"
                onClick={(event) => handleClearCart(event)}
                disabled={clearCartProcessing}
              >
                <span className="woo-next-cart">Clear Cart</span>
                <i className="fa fa-arrow-alt-right" />
              </button>
              {clearCartProcessing ? <p>Clearing...</p> : ""}
              {updateCartProcessing ? <p>Updating...</p> : null}
            </div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-1 gap-4 xl:gap-4 py-4">
            <div className="cart-products col-span-1 mb-5">
              <div className="flex flex-col gap-4">
                {cart.products.length &&
                  cart.products.map((item) => (
                    <CartItem
                      key={item.productId}
                      item={item}
                      updateCartProcessing={updateCartProcessing}
                      products={cart.products}
                      handleRemoveProductClick={handleRemoveProductClick}
                      updateCart={updateCart}
                    />
                  ))}
              </div>
            </div>

            {/*Cart Total*/}
            <div className="row woo-next-cart-total-container border bg-gray-200">
              <div className="">
                {/* <h2 className="text-2xl">Cart Total</h2> */}
                <div className="mb-5">
                  <div>
                    <div className="flex flex-col">
                      <p className="woo-next-cart-element-total font-poppins font-bold uppercase text-xl">
                        Subtotal
                      </p>
                      <p className="woo-next-cart-element-amt text-2xl font-bold font-poppins">
                        {"string" !== typeof cart.totalProductsPrice
                          ? cart.totalProductsPrice.toFixed(2)
                          : cart.totalProductsPrice}
                      </p>
                    </div>
                    {/* <tr className="table-light">
                                    <td className="woo-next-cart-element-total">Total</td>
                                    <td className="woo-next-cart-element-amt">{ ( 'string' !== typeof cart.totalProductsPrice ) ? cart.totalProductsPrice.toFixed(2) : cart.totalProductsPrice }</td>
                                </tr> */}
                  </div>
                </div>
                <Link href="/checkout">
                  <button className="bg-gigapink text-white px-5 py-3 w-auto xl:w-full">
                    <span className="woo-next-cart-checkout-txt font-poppins uppercase">
                      Proceed to Checkout
                    </span>
                    <i className="fas fa-long-arrow-alt-right" />
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Display Errors if any */}
          {requestError ? (
            <div className="row woo-next-cart-total-container mt-5">
              {" "}
              {requestError}{" "}
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        <div className="container mx-auto my-32 px-4 xl:px-0">
          <h2 className="text-2xl mb-5">No items in the cart</h2>
          <Link href="/">
            <button className="bg-gigapink text-white px-5 py-3 rounded-sm">
              <span className="woo-next-cart-checkout-txt font-poppins uppercase">
                Add New Products
              </span>
              <i className="fas fa-long-arrow-alt-right" />
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartContainer;
