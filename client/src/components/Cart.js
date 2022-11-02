import CartContent from "./CartContent";
import CartSummary from "./CartSummary";
import { useCartContext } from "../context/cartContext";
import { useEffect } from "react";

const Cart = () => {
  const { isCartOpened } = useCartContext();
  useEffect(() => {
    if (isCartOpened) {
      document.querySelector("body").style.overflow = "hidden";
    } else {
      document.querySelector("body").style.overflow = "unset";
    }
  }, [isCartOpened]);
  return (
    <div className={`cart ${isCartOpened ? "open" : ""}`}>
      <div className="cart__container">
        <CartContent heading={"Shopping cart"} src="cart" />
        <CartSummary heading={"Cart summary"} />
      </div>
    </div>
  );
};

export default Cart;
