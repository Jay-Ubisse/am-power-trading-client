"use client";

import { createContext, useContext, useState } from "react";

interface CartContextType {
  cart: CartItemsProps[];
  addToCart: (cartItem: CartItemsProps) => void;
  removeFromCart: (cartItemId: number) => void;
}

const CartContext = createContext({} as CartContextType);

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItemsProps[]>([]);

  const addToCart = (product: CartItemsProps) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
