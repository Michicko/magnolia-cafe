import { CLOSE_CART, OPEN_CART } from "../Actions";

const cartReducer = (state, action) => {
  if (action.type === OPEN_CART) {
    return { ...state, isCartOpened: true };
  }
  if (action.type === CLOSE_CART) {
    return { ...state, isCartOpened: false };
  }
  return `No action type ${action.type}`;
};

export default cartReducer;
