import { useState } from "react";
import { v4 } from "uuid";
import { getUpdatedItems } from "./functions";

const CartItem = ({
  item,
  products,
  updateCartProcessing,
  handleRemoveProductClick,
  updateCart,
}) => {
  const [productCount, setProductCount] = useState(item.qty);

  /*
   * When user changes the qty from product input update the cart in localStorage
   * Also update the cart in global context
   *
   * @param {Object} event event
   *
   * @return {void}
   */
  const handleQtyChange = (event, cartKey) => {
    if (process.browser) {
      event.stopPropagation();

      // If the previous update cart mutation request is still processing, then return.
      if (updateCartProcessing) {
        return;
      }

      // If the user tries to delete the count of product, set that to 1 by default ( This will not allow him to reduce it less than zero )
      const newQty = event.target.value ? parseInt(event.target.value) : 1;

      // Set the new qty in state.
      setProductCount(newQty);

      if (products.length) {
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
    }
  };

  return (
    <div
      className="woo-next-cart-item bg-white flex flex-row justify-between sm:gap-2"
      key={item.productId}
    >
      <div className="woo-next-cart-element">
        <img
          width="60"
          src={item.image.sourceUrl}
          srcSet={item.image.srcSet}
          alt={item.image.title}
          className="min-w-[60px] aspect-square object-cover"
        />
      </div>
      <div className="flex flex-col justify-center p-1 w-[120px]">
        <p className="woo-next-cart-element font-parkson sm:text-xl text-lg">
          {item.name}
        </p>
        {/* Qty Input */}
      </div>
      <div className="flex flex-col justify-center p-1">
        <p className="woo-next-cart-element font-poppins font-bold sm:text-sm text-xs">
          £{"string" !== typeof item.price ? item.price.toFixed(2) : item.price}
        </p>
      </div>
      <div className="p-1 flex flex-col justify-center">
        <div className="woo-next-cart-element woo-next-cart-qty flex flex-row gap-1">
          {/* @TODO Need to update this with graphQL query */}
          <input
            type="number"
            min="1"
            data-cart-key={item.cartKey}
            className={`woo-next-cart-qty-input form-control w-10 font-parkson text-lg leading-[28px] px-1 ${
              updateCartProcessing ? "opacity-25 cursor-not-allowed" : ""
            } `}
            value={productCount}
            onChange={(event) => handleQtyChange(event, item.cartKey)}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center p-1">
        <p className="woo-next-cart-element font-poppins font-bold sm:text-sm text-xs">
          {"string" !== typeof item.totalPrice
            ? item.totalPrice.toFixed(2)
            : item.totalPrice}
        </p>
      </div>

      <div className="woo-next-cart-element woo-next-cart-el-close">
        {/* Remove item */}
        <div
          className="woo-next-cart-close-icon cursor-pointer h-full pr-4 flex flex-col justify-center"
          onClick={(event) =>
            handleRemoveProductClick(event, item.cartKey, products)
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16pt"
            height="16pt"
            viewBox="0 0 16 16"
          >
            <g fill="#000000">
              <path d="M8 0C3.578 0 0 3.578 0 8c0 4.422 3.578 8 8 8 4.422 0 8-3.578 8-8 0-4.422-3.578-8-8-8zm0 14.75c-3.73 0-6.75-3.02-6.75-6.75S4.27 1.25 8 1.25 14.75 4.27 14.75 8 11.73 14.75 8 14.75zm0 0" />
              <path d="M10.738 9.852L8.883 8l1.855-1.852a.632.632 0 000-.886.632.632 0 00-.886 0L8 7.117 6.148 5.262a.632.632 0 00-.886 0 .632.632 0 000 .886L7.117 8 5.262 9.852a.632.632 0 000 .886c.246.242.64.242.886 0L8 8.883l1.852 1.855c.246.242.64.242.886 0a.632.632 0 000-.886zm0 0" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
