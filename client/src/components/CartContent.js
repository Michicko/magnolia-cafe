import QuantityControl from "./QuantityControl";
import { getKey } from "../utilities/utils";
import { useCartContext } from "../context/cartContext";
import { AiOutlineClose } from "react-icons/ai";

const CartContent = ({ heading, products, src }) => {
  const { closeCart } = useCartContext();
  const quantity = 1;
  return (
    <div className="cart__content">
      <div className="cart__content-header">
        <h3 className="cart__content-heading">{heading}</h3>
        {src === "cart" && (
          <button className="cart__content-btn close-btn" onClick={closeCart}>
            close cart
          </button>
        )}
      </div>
      <div className="cart__list-box">
        <ul className="cart__list">
          <li className="cart__item">
            <img
              src={require("../assets/images/bakery-1.jpg")}
              alt="cart item"
              className="cart__item-img"
            />
            <div className="cart__item-body">
              <h4 className="cart__item-name">Chail latte</h4>
              <QuantityControl quantity={quantity} size="sm" />
              <h4 className="cart__item-price">$5</h4>
              <AiOutlineClose className="icon sm secondary" />
            </div>
          </li>
          <li className="cart__item">
            <img
              src={require("../assets/images/bakery-1.jpg")}
              alt="cart item"
              className="cart__item-img"
            />
            <div className="cart__item-body">
              <h4 className="cart__item-name">Chail latte</h4>
              <QuantityControl quantity={quantity} size="sm" />
              <h4 className="cart__item-price">$5</h4>
              <AiOutlineClose className="icon sm secondary" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CartContent;
