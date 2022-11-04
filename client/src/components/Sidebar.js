import { Link } from "react-router-dom";

const Sidebar = ({ navlinks, isMenuOpened, closeSidebar }) => {
  const links = ["reservation", ...navlinks];
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
                <Link className="sidebar__link" to="/" onClick={closeSidebar}>
                  {link}
                </Link>
              </li>
            );
          }
          return (
            <li className="sidebar__item" key={link}>
              <Link
                to={`/${link}`}
                className="sidebar__link"
                onClick={closeSidebar}
              >
                {link}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
