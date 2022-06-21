import { useMutation, useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import { useEffect, useState } from "react";
import client from "../lib/apollo";

export const getCartData = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const GETCARTCOUNT = gql`
    query Cart {
      cart {
        contents {
          nodes {
            product {
              node {
                name
                image {
                  sourceUrl
                }
              }
            }
            quantity
            subtotal
          }
          itemCount
          productCount
        }
      }
    }
  `;
  const { data, loading, error } = useQuery(GETCARTCOUNT, {
    client: client,
    onCompleted: (data) => {
      //   console.log("complete", data);
    },
  });

  return data;
};

export function addToCartBtn(productId, quantity) {
  const ADDTOCART = gql`
    mutation AddToCart($productId: Int!, $quantity: Int!) {
      addToCart(input: { productId: $productId, quantity: $quantity }) {
        clientMutationId
      }
    }
  `;

  const [productInfo, { data, loading, error }] = useMutation(ADDTOCART, {
    client: client,
    onCompleted: (data) => {
      console.log("complete", data);
    },
  });

  return (
    <div className="bg-gigapink py-2 w-[150px]">
      <p
        className="font-parkson text-xl text-center text-white w-[150px] cursor-pointer"
        onClick={() =>
          productInfo({
            variables: { productId: productId, quantity: quantity },
          })
        }
      >
        Add To Basket
      </p>
    </div>
  );
}

export const getCartItems = () => {
  setCartItems(getCartData());

  return cartItems;
};

export const getCartCount = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  let data = getCartData();

  let count = data?.cart.contents.itemCount;

  if (count) {
    setCartCount(count);
  }

  return cartCount;
};

export const addToCart = (product) => {
  var updatedItems = [...cartItems];

  let existIndex = updatedItems.findIndex((item) => item.id === product.id);
  if (existIndex >= 0) {
    updatedItems[existIndex].quantity = updatedItems[existIndex].quantity
      ? updatedItems[existIndex].quantity++
      : 2;
    setCartItems(updatedItems);
  } else {
    setCartItems([...cartItems, product]);
  }

  setCartCount(cartCount + 1);
};

export const removeFromCart = (product) => {
  let removeIndex = cartItems.findIndex((item) => item.id === product.id);
  let newitems = cartItems.splice(removeIndex, 1);
  setCartItems(newitems);

  setCartCount(cartCount - 1);
};
