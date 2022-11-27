import { NavLink, Outlet, useLocation } from "react-router-dom";
import sidebarlogo from "../assets/images/logo.png";
import Icons from "../components/Icons";
import { getKey } from "../utilities/utils";
import slugify from "slugify";

const ControlPanelRoot = () => {
  const links = ["orders", "menuItems", "combos", "settings", "logout"];
  const innerLinks = [
    {
      link: "orders",
      links: [
        "new orders",
        "accepted",
        "preparing",
        "packaged",
        "dispatched",
        "delivered",
      ],
    },
    {
      link: "menuItems",
      links: ["food items", "categories", "flavors", "milks"],
    },
    {
      link: "combos",
      links: ["combo list", "categories"],
    },
    {
      link: "settings",
      links: ["combo list", "categories"],
    },
  ];

  const { pathname } = useLocation();
  const currentLink = pathname.split("/")[1];

  const filteredLinks = innerLinks.find((el) => el.link === currentLink);

  return (
    <div className="controlpanel">
      <aside className="controlpanel__sidebar">
        <div className="controlpanel__sidebar-sub">
          <img
            src={sidebarlogo}
            alt="magnolia logo"
            className="controlpanel__sidebar-logo"
          />
          <ul className="controlpanel__sidebar-list">
            {links.map((link) => {
              return (
                <li className="controlpanel__sidebar-item" key={getKey()}>
                  <NavLink
                    to={`/${link}`}
                    className={({ isActive }) =>
                      isActive
                        ? "controlpanel__sidebar-link active"
                        : "controlpanel__sidebar-link"
                    }
                  >
                    <Icons name={link} />
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="controlpanel__sidebar-main">
          <h3 className="controlpanel__sidebar-heading">Orders</h3>
          <ul className="controlpanel__sidebar-main-list">
            {filteredLinks.links.map((link) => {
              return (
                <li className="controlpanel__sidebar-main-item">
                  <NavLink
                    to={`/${slugify(link)}`}
                    className={({ isActive }) =>
                      isActive
                        ? "controlpanel__sidebar-main-link active"
                        : "controlpanel__sidebar-main-link"
                    }
                  >
                    {link}
                  </NavLink>
                  <p className="total">2</p>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
      <main className="controlpanel__main">
        <Outlet />
      </main>
    </div>
  );
};

export default ControlPanelRoot;
