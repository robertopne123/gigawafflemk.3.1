import React, { useState } from "react";

var CartState = {
  items: [],
  cartCount: 0,
  addToCart: function (product) {},
  removeFromCart: function (productId) {},
};

const CartContext = React.createContext(CartState);

export default CartContext;
