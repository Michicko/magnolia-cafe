import { NavLink } from "react-router-dom";
import { getKey } from "../utilities/utils";
import Icons from "./Icons";

const CpSidebar = () => {
  const sidebarLinks = [
    "dashboard",
    "orders",
    "reservations",
    "menuItems",
    "combos",
    "seats",
    "customers",
    "report",
    "settings",
    "logout",
  ];

  // settings => employees => {
  // dispatch => deliver orders
  // admin => have all the power in the group and are the authority figure
  // moderator => manage the day-to-day affairs of a forum chats and customer service
  // }
  return (
    <aside className="cp-root__sidebar">
      <img
        src={require("../assets/images/logo.png")}
        alt="logo"
        className="cp-root__sidebar-logo"
      />
      <ul className="cp-root__sidebar-list">
        {sidebarLinks.map((sidebarLink) => {
          if (sidebarLink === "logout") {
            return (
              <li className="cp-root__sidebar-item" key={getKey()}>
                <button className="cp-root__sidebar-btn">
                  <Icons name={sidebarLink} />
                  <span>{sidebarLink}</span>
                </button>
              </li>
            );
          }
          return (
            <li className="cp-root__sidebar-item" key={getKey()}>
              <NavLink
                className={({ isActive, isPending }) =>
                  isActive
                    ? "cp-root__sidebar-link active"
                    : isPending
                    ? "cp-root__sidebar-link pending"
                    : "cp-root__sidebar-link"
                }
                to={`/${sidebarLink}`}
              >
                <Icons name={sidebarLink} />
                <span>{sidebarLink}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default CpSidebar;
