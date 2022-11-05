import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const Sidebar = ({ navlinks, isMenuOpened, closeSidebar }) => {
  const [isHome, setIsHome] = useState(false);
  const links = ["reservation", ...navlinks];
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname === "/") {
      setIsHome(true);
    } else {
      setIsHome(false);
    }
  }, [pathname]);
  return (
    <aside className={isMenuOpened ? "sidebar open" : "sidebar"}>
      <ul className="sidebar__list">
        {links.map((link) => {
          if (link === "reservation") {
            return (
              <Link
                className="sidebar__btn"
                to={`/${link}`}
                key={link}
                onClick={closeSidebar}
              >
                Book a Table
              </Link>
            );
          }
          if (link === "home") {
            return (
              <li className="sidebar__item" key={link}>
                <Link
                  className={`sidebar__link ${isHome ? "active" : ""}`}
                  to="/"
                  onClick={closeSidebar}
                >
                  {link}
                </Link>
              </li>
            );
          }
          return (
            <li className="sidebar__item" key={link}>
              <NavLink
                className={({ isActive, isPending }) =>
                  isActive
                    ? "sidebar__link active"
                    : isPending
                    ? "sidebar__link pending"
                    : "sidebar__link"
                }
                to={`/${link}`}
                onClick={closeSidebar}
              >
                {link}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
