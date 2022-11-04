import { IoIosArrowDown } from "react-icons/io";
import CategoryIcon from "../components/CategoryIcon";
import { Link } from "react-router-dom";
import slugify from "slugify";
import { menuItems } from "../utilities/data";
import { useEffect, useRef, useState } from "react";
import { getKey } from "../utilities/utils";
import Portal from "../Portal";
import CategoryIconsBox from "../components/CategoryIconsBox";

const Menu = () => {
  const [index, setIndex] = useState(0);
  const current = index;
  const iconsRef = useRef(null);
  const menuRef = useRef(null);

  const categories = [
    ...new Set(
      menuItems.map((item) => {
        return item.category;
      })
    ),
  ];

  const menuCategories = [
    ...new Set(
      menuItems.map((item) => {
        return item.category;
      })
    ),
  ];

  // const [menuCategories, setMenuCategories] = useState(categories);

  const [categoryList, setCategoryList] = useState(categories);
  const [menuCategoryList, setMenuCategoryList] = useState(menuCategories);
  const [currentMenu, setCurrentMenu] = useState(categoryList[0]);

  const nextCat = () => {
    const newCategories = [...categoryList];
    const newMenuCategories = [...menuCategoryList];
    const icons = [
      ...iconsRef.current.querySelectorAll(".menu__category-icon"),
    ];
    const menus = [...menuRef.current.querySelectorAll(".menu__slide")];
    let curr = newCategories[0];
    let currMenu = newMenuCategories[0];
    icons[0].classList.remove("current");
    icons[0].classList.add("anime");
    icons[1].classList.add("current");
    menus[0].classList.add("prev");

    let timeOutMenu1 = setTimeout(() => {
      menus[0].classList.remove("prev");
      newMenuCategories.splice(0, 1);
      newMenuCategories.splice(newMenuCategories.length, 0, currMenu);
      setMenuCategoryList(newMenuCategories);
      menuRef.current.classList.remove("slideguy");
    }, 1400);

    let timeOutMenu2 = setTimeout(() => {
      menuRef.current.classList.add("slideguy");
    }, 200);

    let timeOutCategory1 = setTimeout(() => {
      icons[0].classList.remove("anime");
      newCategories.splice(0, 1);
      newCategories.splice(newCategories.length, 0, curr);
      setCategoryList(newCategories);
      icons[1].classList.remove("current");
      icons[0].classList.add("current");
      setCurrentMenu(newCategories[0]);
      iconsRef.current.classList.add("anime2");
    }, 600);

    let timeOutCategory2 = setTimeout(() => {
      iconsRef.current.classList.remove("anime2");
    }, 2000);

    return () => {
      clearTimeout(timeOutCategory1);
      clearTimeout(timeOutCategory2);
      clearTimeout(timeOutMenu1);
      clearTimeout(timeOutMenu2);
    };
  };

  const categoriesWithFlavors = [
    "hot coffee and tea",
    "other hot drinks",
    "iced coffee and tea",
  ];
  const milks = "whole skim half & half, almond, oat";
  const flavors = "vanila, caramel, hazelnut, rose";

  const facts =
    "Did you know we offer special seasoned menu item? \n Make sure to ask about them next time you vsist us!";

  return (
    <div className="menu">
      <div className="menu__container">
        <div className="menu__category-section">
          <h2 className="menu__category-heading">Menu</h2>
          <div className="menu__category-box">
            <CategoryIconsBox
              categoryList={categoryList}
              iconsRef={iconsRef}
              current={current}
            />
          </div>
          <button className="round-btn menu__category-btn" onClick={nextCat}>
            <IoIosArrowDown className="icon secondary" />
          </button>
        </div>
        <div className="menu__slider-section">
          <div className="menu__slider">
            <div className="menu__slides" ref={menuRef}>
              {menuCategoryList.map((category, i) => {
                const menuByCategory = menuItems.filter(
                  (item) => item.category === category
                );
                return (
                  <div className="menu__slide" key={getKey()}>
                    <div className="menu__list-container">
                      <h3 className="menu__list-heading">
                        {category.replace(/And/gi, "&")}
                      </h3>
                      <div className="menu__list-box">
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
                                  <p className="menu__item-desc">
                                    {description}
                                  </p>
                                )}
                              </Link>
                            );
                          })}
                        </ul>
                      </div>
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
    </div>
  );
};

export default Menu;
