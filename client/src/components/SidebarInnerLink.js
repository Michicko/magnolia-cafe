import { NavLink } from "react-router-dom";

const SidebarInnerLink = ({ type, link }) => {
  if (type === "dropdown") {
    return <button className="sidebar-innerBtn"></button>;
  }
  return (
    <NavLink
      className="control-panel__sidebar-link control-panel__sidebar-link--inner"
      to={`/cp/orders/${link}`}
    >
      {link}
    </NavLink>
  );
};

export default SidebarInnerLink;
