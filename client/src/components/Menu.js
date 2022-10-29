import Card from "./Card";
import { Link } from "react-router-dom";
import { CgArrowLongRight } from "react-icons/cg";

const Menu = () => {
  const products = [
    {
      name: "cappuccino",
      image: "cappuccino.jpg",
      price: 5.25,
    },
    {
      name: "iced latte",
      image: "iced-latte.jpg",
      price: 4.5,
    },
  ];
  return (
    <section className="section section__menu">
      <div className="container small">
        <div className="row">
          <div className="heading">
            <h2 className="secondary-heading">Menu</h2>
          </div>
          <div className="section__menu-container">
            <div className="products">
              {products.map((product, i) => {
                return <Card product={product} key={i} />;
              })}
            </div>
            <Link to="/menu" className="btn">
              See menu <CgArrowLongRight className="btn__icon left" />
            </Link>
            <img
              src={require("../assets/images/1.png")}
              alt="coffee bean"
              className="section__menu-img img-1"
            />
            <img
              src={require("../assets/images/3.png")}
              alt="coffee bean"
              className="section__menu-img img-3"
            />
            <img
              src={require("../assets/images/2.png")}
              alt="coffee bean"
              className="section__menu-img img-2"
            />
            <img
              src={require("../assets/images/3.png")}
              alt="coffee bean"
              className="section__menu-img img-5"
            />
            <img
              src={require("../assets/images/3.png")}
              alt="coffee bean"
              className="section__menu-img img-6"
            />
            <img
              src={require("../assets/images/gran.png")}
              alt="coffee bean"
              className="section__menu-img dust img-7"
            />
            <img
              src={require("../assets/images/gran.png")}
              alt="coffee bean"
              className="section__menu-img dust img-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
