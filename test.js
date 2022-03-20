"use strict";
exports.__esModule = true;
var react_1 = require("react");
// the default state for the cart, with a defined type
var defaultCart = {
    items: [],
    cartCount: 0,
    addToCart: function (product) { },
    removeFromCart: function (productId) { }
};
var CartContext = react_1["default"].createContext(defaultCart);
exports["default"] = CartContext;
