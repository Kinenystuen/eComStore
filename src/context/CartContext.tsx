import React, { createContext, useContext, useReducer, useState } from "react";
import { cartReducer, CartState, initialState } from "./CartReducer";

const CartContext = createContext<{
  state: CartState;
  addItem: (item: {
    id: string;
    title: string;
    price: number;
    image: string;
  }) => void;
  removeItem: (id: string) => void;
  incrementItem: (id: string) => void;
  decrementItem: (id: string) => void;
  clearCart: () => void;
  setOrder: (items: CartState["items"]) => void;
  order: CartState["items"];
} | null>(null);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [order, setOrder] = useState<CartState["items"]>([]);

  // Add a new item to the cart
  const addItem = (item: {
    id: string;
    title: string;
    price: number;
    image: string;
  }) => {
    dispatch({ type: "ADD_ITEM", payload: { ...item, quantity: 1 } });
  };

  // Remove an item from the cart
  const removeItem = (id: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: { id } });
  };

  // Increment the quantity of an item
  const incrementItem = (id: string) => {
    dispatch({ type: "INCREMENT_ITEM", payload: { id } });
  };

  // Decrement the quantity of an item
  const decrementItem = (id: string) => {
    dispatch({ type: "DECREMENT_ITEM", payload: { id } });
  };

  // Clear all items from the cart
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <CartContext.Provider
      value={{
        state,
        addItem,
        removeItem,
        incrementItem,
        decrementItem,
        clearCart,
        order,
        setOrder
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
};
