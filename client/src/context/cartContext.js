import { createContext, useContext, useReducer } from "react";
import { CLOSE_CART, OPEN_CART } from "../Actions";
import reducer from "../reducers/cartReducer";

const initialState = {
  isCartOpened: false,
  cart: [],
  totalQuantity: 0,
  subTotalPrice: 0,
  deliveryFee: 5,
};

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openCart = () => {
    dispatch({ type: OPEN_CART });
  };
  const closeCart = () => {
    dispatch({ type: CLOSE_CART });
  };

  return (
    <CartContext.Provider value={{ ...state, openCart, closeCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
