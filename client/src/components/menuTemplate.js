import Heading from "../components/Heading";
import PageContainer from "../components/PageContainer";
import { IoIosArrowDown } from "react-icons/io";
import CategoryIcon from "../components/CategoryIcon";
import { Link } from "react-router-dom";
import slugify from "slugify";

const MenuTemplate = () => {
  const current = 1;

  const menuItems = [
    {
      id: "73628jdd",
      category: "hot coffee and tea",
      name: "Americano",
      price: 3.75,
      slug: "americano",
      stock: 12,
    },
    {
      id: "34628axd",
      category: "hot coffee and tea",
      name: "Expresso",
      price: 3.5,
      slug: "expresso",
      stock: 8,
    },
    {
      id: "24a28acd",
      category: "hot coffee and tea",
      name: "Latte",
      price: 4.5,
      slug: "latte",
      stock: 7,
    },
    {
      id: "34628axd",
      category: "hot coffee and tea",
      name: "Hot tea",
      description: "earl grey, lemon ginger, mint",
      price: 4.5,
      slug: "hot-tea",
      stock: 10,
    },
    {
      id: "14628eac",
      category: "breakfast and lunch",
      name: "Bacon scramble",
      description: "aged chedar, onion with toasted country bread",
      price: 10,
      slug: "bacon-scramble",
      stock: 8,
    },
    {
      id: "2e624eac",
      category: "breakfast and lunch",
      name: "Avocado toast with egg",
      description: "chili honey, stoked salt on country bread",
      price: 9,
      slug: "avocado-toast-with-egg",
      stock: 8,
    },
    {
      id: "2e622ebc",
      category: "other hot drinks",
      name: "chai Latte",
      price: 4.5,
      slug: "chai-latte",
      stock: 7,
    },
    {
      id: "2e622ebc",
      category: "iced coffee and tea",
      name: "cold brew",
      price: 4.25,
      slug: "cold-brew",
      stock: 11,
    },
    {
      id: "2b612ebc",
      category: "iced coffee and tea",
      name: "iced green tea",
      price: 4,
      slug: "aiced-green-tea",
      stock: 8,
    },
    {
      id: "2b652abd",
      category: "bakery",
      name: "double chocolate brownie",
      price: 4,
      slug: "double-chocolate-brownie",
      stock: 13,
    },
    {
      id: "2b342acd",
      category: "bakery",
      name: "cinamon roll",
      price: 4,
      slug: "cinamon-roll",
      stock: 14,
    },
    {
      id: "2ba29ace",
      category: "bakery",
      name: "bluebery muffin",
      price: 3,
      slug: "blueberry-muffin",
      stock: 10,
    },
  ];

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
    return Math.trunc(Math.random() * 2000);
  }

  const getMenuItem = (category) => {
    const menuItem = menuItems.filter((item) => item.category === category);
    return menuItem;
  };

  return (
    <section className="menu">
      <div className="menu__container">
        <Heading heading="Menu" align="left" />
        <div className="menu__content">
          <div className="menu__category-section">
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
              <div className="menu__slider-inner">
                <div className="menu__slider-slides">
                  {categories.map((cat) => {
                    const filteredByCategory = menuItems.filter(
                      (item) => item.category === cat
                    );
                    return (
                      <div className="menu__slider-slide" key={getKey()}>
                        <div className="menu__list-section">
                          <h3 className="menu__slider-heading">
                            {cat.replace(/And/gi, "&")}
                          </h3>
                          <ul className="menu__list">
                            {filteredByCategory.map((item, i) => {
                              const { name, price, slug, description } = item;
                              return (
                                <Link
                                  className="menu__item"
                                  key={getKey()}
                                  to={`/menu/${slug}`}
                                >
                                  <div>
                                    <p className="menu__item-name">{name}</p>
                                    <p className="menu__item-price">${price}</p>
                                  </div>
                                  {description && (
                                    <p className="menu__item-desc">
                                      {description}
                                    </p>
                                  )}
                                </Link>
                              );
                            })}
                          </ul>
                        </div>
                        {/* categoriesWithFlavors */}
                        <div className="menu__img-section">
                          <div
                            className={`menu__img-box ${
                              cat === "iced coffee and tea"
                                ? "down"
                                : cat === "bakery"
                                ? "up"
                                : cat === "breakfast and lunch"
                                ? "a"
                                : cat === "hot coffee and tea"
                                ? "up"
                                : cat === "other drinks"
                                ? "up"
                                : ""
                            }`}
                          >
                            <img
                              src={require(`../assets/images/${slugify(
                                cat
                              )}-1.jpg`)}
                              alt={cat}
                              className="menu__img"
                            />
                          </div>
                          <div
                            className={`menu__img-box ${
                              cat === "iced coffee and tea"
                                ? "up"
                                : cat === "bakery"
                                ? "down"
                                : cat === "breakfast and lunch"
                                ? "b"
                                : cat === "hot coffee and tea"
                                ? "down"
                                : cat === "other drinks"
                                ? "down"
                                : ""
                            }`}
                          >
                            <img
                              src={require(`../assets/images/${slugify(
                                cat
                              )}-2.jpg`)}
                              alt={cat}
                              className="menu__img"
                            />
                          </div>
                          <div className="menu__text-box"></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuTemplate;
