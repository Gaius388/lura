import React, { useContext, useReducer } from "react";
import reducer from "../reducer/product_reducer";
import {
  ADD_TO_CART,
  DECREASE_CART_QUANTITY,
  INCREASE_CART_QUANTITY,
} from "../action";
const initialState = {
  product: {
    name: "",
    amount: 0,
    quantity: 1,
    tax: 0.05,
    subtotal: 0,
    total: 0,
  },
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (name, amount, quantity) => {
    dispatch({ type: ADD_TO_CART, payload: { name, amount, quantity } });
  };
  const counterIncrease = () => {
    dispatch({ type: INCREASE_CART_QUANTITY });
  };
  const counterDecrease = () => {
    dispatch({ type: DECREASE_CART_QUANTITY });
  };

  return (
    <ProductsContext.Provider
      value={{ ...state, addToCart, counterIncrease, counterDecrease }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
