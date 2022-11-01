import Heading from "../components/Heading";
import PageContainer from "../components/PageContainer";
import { IoIosArrowDown } from "react-icons/io";
import CategoryIcon from "../components/CategoryIcon";
import { Link } from "react-router-dom";
import slugify from "slugify";
import { menuItems } from "../utilities/data";
import { useState } from "react";

const Menu = () => {
  const [index, setIndex] = useState(3);
  const current = index;

  const categories = [
    ...new Set(
      menuItems.map((item) => {
        return item.category;
      })
    ),
  ];

  const categoriesWithFlavors = [
    "hot coffee and tea",
    "other hot drinks",
    "iced coffee and tea",
  ];
  const milks = "whole skim half & half, almond, oat";
  const flavors = "vanila, caramel, hazelnut, rose";

  const facts =
    "Did you know we offer special seasoned menu item? \n Make sure to ask about them next time you vsist us!";

  function getKey() {
    return Math.trunc(Math.random() * 20000);
  }

  const getMenuItem = (category) => {
    const menuItem = menuItems.filter((item) => item.category === category);
    return menuItem;
  };

  return (
    <section className="menu">
      <div className="menu__container">
        <h2 className="menu__section-heading sm">Menu</h2>
        <div className="menu__category-section">
          <h2 className="menu__section-heading">Menu</h2>
          <div className="menu__category-box">
            <ul className="menu__categories">
              {categories.map((category, i) => {
                return (
                  <CategoryIcon
                    key={getKey()}
                    name={category}
                    current={current}
                    i={i}
                  />
                );
              })}
            </ul>
          </div>
          <button className="round-btn">
            <IoIosArrowDown className="icon secondary" />
          </button>
        </div>
        <div className="menu__slider-section">
          <div className="menu__slider">
            <div className="menu__slider-slides">
              {categories.map((category, i) => {
                const menuByCategory = menuItems.filter(
                  (item) => item.category === category
                );
                return (
                  <div
                    className={
                      current === i
                        ? "menu__slider-slide current"
                        : "menu__slider-slide"
                    }
                    key={getKey()}
                  >
                    <div className="menu__list-box">
                      <h3 className="menu__slider-heading">
                        {category.replace(/And/gi, "&")}
                      </h3>
                      <ul className="menu__list">
                        {menuByCategory.map((menuItem) => {
                          const { name, slug, price, description } = menuItem;
                          return (
                            <Link
                              key={getKey()}
                              className="menu__item"
                              to={`/menu/${slug}`}
                            >
                              <div>
                                <p className="menu__item-name">{name}</p>
                                <p className="menu__item-price">${price}</p>
                              </div>
                              {description && (
                                <p className="menu__item-desc">{description}</p>
                              )}
                            </Link>
                          );
                        })}
                      </ul>
                    </div>
                    <div
                      className={`menu__img-section ${
                        category === "iced coffee and tea" ? "ic-img-sect" : ""
                      }`}
                    >
                      <div
                        className={`menu__img-box ${
                          category === "iced coffee and tea"
                            ? "ic"
                            : category === "bakery"
                            ? "bk"
                            : category === "breakfast and lunch"
                            ? "bl"
                            : category === "hot coffee and tea"
                            ? "hc"
                            : category === "other hot drinks"
                            ? "od"
                            : ""
                        }`}
                      >
                        <img
                          src={require(`../assets/images/${slugify(
                            category
                          )}-1.jpg`)}
                          alt={category}
                          className="menu__img"
                        />
                      </div>
                      <div
                        className={`menu__img-box ${
                          category === "iced coffee and tea"
                            ? "ic-2"
                            : category === "bakery"
                            ? "bk-2"
                            : category === "breakfast and lunch"
                            ? "bl-2"
                            : category === "hot coffee and tea"
                            ? "hc-2"
                            : category === "other hot drinks"
                            ? "od-2"
                            : ""
                        }`}
                      >
                        <img
                          src={require(`../assets/images/${slugify(
                            category
                          )}-2.jpg`)}
                          alt={category}
                          className="menu__img"
                        />
                      </div>
                      <div
                        className={`menu__text-box ${
                          category === "iced coffee and tea"
                            ? "ic-3"
                            : category === "breakfast and lunch"
                            ? "bl-txt"
                            : ""
                        }`}
                      >
                        {categoriesWithFlavors.includes(category) && (
                          <>
                            <div className="menu__text-infos">
                              <h5>milks:</h5>
                              <p>{milks}</p>
                            </div>
                            <div className="menu__text-infos">
                              <h5>extra flavors:</h5>
                              <p>{flavors}</p>
                            </div>
                          </>
                        )}
                        {category === "breakfast and lunch" && (
                          <div className="menu__text-infos">
                            <h5>Did you know:</h5>
                            <p>{facts}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
