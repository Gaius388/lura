import {
  ADD_TO_CART,
  DECREASE_CART_QUANTITY,
  INCREASE_CART_QUANTITY,
} from "../action";

const product_reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { name, amount, quantity } = action.payload;
    const { tax } = state.product;
    return {
      ...state,
      product: {
        ...state.product,
        name,
        amount,
        quantity,
        subtotal: amount,
        total: amount * (tax + 1),
      },
    };
  }
  if (action.type === INCREASE_CART_QUANTITY) {
    const { quantity, amount, tax } = state.product;
    return {
      ...state,
      product: {
        ...state.product,
        quantity: quantity + 1,
        subtotal: (quantity + 1) * amount,
        total: (quantity + 1) * amount * (tax + 1),
      },
    };
  }
  if (action.type === DECREASE_CART_QUANTITY) {
    const { quantity, amount, tax } = state.product;
    if (quantity === 1) {
      return state;
    }
    return {
      ...state,
      product: {
        ...state.product,
        quantity: quantity - 1,
        subtotal: (quantity - 1) * amount,
        total: (quantity - 1) * amount * (tax + 1),
      },
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default product_reducer;
