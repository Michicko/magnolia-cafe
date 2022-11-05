import { Link, NavLink, useLocation } from "react-router-dom";
import { navlinks } from "../utilities/data";
import { BsBag } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { VscClose } from "react-icons/vsc";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { useCartContext } from "../context/cartContext";

const Navbar = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const { openCart } = useCartContext();
  const [isHome, setIsHome] = useState(false);
  const openSidebar = () => {
    setIsMenuOpened(true);
  };
  const closeSidebar = () => {
    setIsMenuOpened(false);
  };
  const { pathname } = useLocation();
  const [removeBg, setRemoveBg] = useState(false);
  useEffect(() => {
    if (pathname === "/") {
      setIsHome(true);
    } else {
      setIsHome(false);
    }

    if (pathname === "/menu") {
      setRemoveBg(true);
    } else {
      setRemoveBg(false);
    }
  }, [pathname]);
  const setTrans = removeBg;

  return (
    <nav className={setTrans ? "nav bg-trans" : "nav"}>
      <div className="nav__container">
        <Link className="nav__logo" to="/">
          Magnolia Cafe
        </Link>
        <ul className="nav__list nav__list-main">
          {navlinks.map((link) => {
            if (link === "home") {
              return (
                <li className="nav__item" key={link}>
                  <Link
                    className={`nav__link ${isHome ? "active" : ""}`}
                    to="/"
                  >
                    {link}
                  </Link>
                </li>
              );
            }

            return (
              <li className="nav__item" key={link}>
                {/* <Link className="nav__link" to={`/${link}`}>
                  {link}
                </Link> */}
                <NavLink
                  className={({ isActive, isPending }) =>
                    isActive
                      ? "nav__link active"
                      : isPending
                      ? "nav__link pending"
                      : "nav__link"
                  }
                  to={`/${link}`}
                >
                  {link}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <div className="nav__list nav__list-sub">
          <button className="nav__cart-btn" onClick={openCart}>
            <BsBag className="nav__cart-icon" />
            <div className="nav__cart-total-box">
              <span className="nav__cart-total-count">4</span>
            </div>
          </button>
          <Link className="nav__btn" to="/reservation">
            Book a Table
          </Link>
          <>
            {!isMenuOpened && (
              <FiMenu className="nav__icon nav__menu" onClick={openSidebar} />
            )}
            {isMenuOpened && (
              <VscClose
                className="nav__icon nav__menu"
                onClick={closeSidebar}
              />
            )}
          </>
        </div>

        {/* sidebar */}
        <Sidebar
          navlinks={navlinks}
          isMenuOpened={isMenuOpened}
          closeSidebar={closeSidebar}
        />
      </div>
    </nav>
  );
};

export default Navbar;
