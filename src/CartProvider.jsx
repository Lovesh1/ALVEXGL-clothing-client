// CartProvider.jsx
import React, { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, size = "M") => {
    const existingItem = cart.find(
      (item) => item.id === product.id && item.size === size
    );
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, size, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, size, change) => {
    setCart(
      cart
        .map((item) => {
          if (item.id === id && item.size === size) {
            const newQuantity = item.quantity + change;
            return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const removeFromCart = (id, size) => {
    setCart(cart.filter((item) => !(item.id === id && item.size === size)));
  };

  const getTotalPrice = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const getTotalItems = () =>
    cart.reduce((total, item) => total + item.quantity, 0);

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        getTotalPrice,
        getTotalItems,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
