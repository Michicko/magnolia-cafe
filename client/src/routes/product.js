import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { milks, flavors } from "../utilities/data";
import slugify from "slugify";
import { useState } from "react";
import QuantityControl from "../components/QuantityControl";
import { getKey } from "../utilities/utils";

const Product = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="product">
      <div className="product__container">
        <div className="product__img-container">
          <img
            src={require("../assets/images/chai-latte-tea.png")}
            alt="latte"
            className="product__img"
          />
        </div>
        <div className="product__content-container">
          <h2 className="product__name">Chai Latte</h2>
          <p className="product__description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
            eligendi ipsam, minima tenetur aperiam illo error cum modi quidem
            sunt! Lorem ipsum dolor sit amet.
          </p>
          <h3 className="product__price">$5.45</h3>
          {/* quantity */}
          <div className="product__ctrls-box">
            <h5 className="product__options-heading">Quantity</h5>
            <QuantityControl quantity={quantity} size="bg" />
          </div>
          <div className="product__options">
            <h5 className="product__options-heading">Milks</h5>
            <div>
              {milks.map((milk) => {
                return (
                  <label
                    htmlFor={slugify(milk)}
                    className="product__label"
                    key={getKey()}
                  >
                    <input
                      type="radio"
                      name="milks"
                      id={slugify(milk)}
                      className="product__radio"
                    />
                    <span className="product__radio-bx"></span>
                    <span className="product__label-name">{milk}</span>
                  </label>
                );
              })}
            </div>
          </div>
          <div className="product__options flavor">
            <h5 className="product__options-heading">Flavors</h5>
            <div>
              {flavors.map((flavor) => {
                return (
                  <label
                    htmlFor={slugify(flavor)}
                    className="product__label"
                    key={getKey()}
                  >
                    <input
                      type="radio"
                      name="flavors"
                      id={slugify(flavor)}
                      className="product__radio"
                    />
                    <span className="product__radio-bx"></span>
                    <span className="product__label-name">{flavor}</span>
                  </label>
                );
              })}
            </div>
          </div>
          <button className="btn">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
