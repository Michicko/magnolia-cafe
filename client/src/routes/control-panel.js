import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/images/logo.png";
import Icons from "../components/Icons";
import SidebarInnerLink from "../components/SidebarInnerLink";
import { getKey } from "../utilities/utils";

const ControlPanel = () => {
  const links = ["orders", "menuitems", "combos", "settings", "logout"];
  const [innerLinks, setInnerLinks] = useState([]);
  const [index, setIndex] = useState(0);
  const currentPage = links[index];
  const [innerLinkPage, setInnerLinkPage] = useState("");

  const setCurrentPageIndex = (i) => {
    setIndex(i);
  };

  const navigationInnerList =
    innerLinks.length === 0 ? (
      <div>Loading</div>
    ) : (
      innerLinks.map((inner) => {
        const { type, link } = inner;
        return (
          <li className="control-panel__navigation-item" key={getKey()}>
            <SidebarInnerLink type={type} link={link} />
            {inner.totalItems >= 0 && (
              <p className="control-panel__navigation-item-total">
                {inner.totalItems}
              </p>
            )}
          </li>
        );
      })
    );

  return (
    <div className="control-panel">
      <aside className="control-panel__sidebar">
        <div className="control-panel__navigation control-panel__navigation--outer control-panel__navigation-links">
          <img src={logo} alt="magnolia cafe logo" className="logo" />
          {links.map((link, i) => {
            if (link === "logout") {
              return (
                <button
                  className="control-panel__sidebar-link control-panel__sidebar-link--outer"
                  key={getKey()}
                >
                  <Icons name={link} />
                </button>
              );
            }
            return (
              <NavLink
                to={`/cp/${link}`}
                className={
                  index === i
                    ? "control-panel__sidebar-link control-panel__sidebar-link--outer active"
                    : "control-panel__sidebar-link control-panel__sidebar-link--outer"
                }
                key={getKey()}
                onClick={() => setCurrentPageIndex(i)}
              >
                <Icons name={link} />
              </NavLink>
            );
          })}
        </div>
        <div className="control-panel__navigation control-panel__navigation--inner">
          <h2 className="topbar-heading">{currentPage}</h2>
          <ul className="control-panel__navigation-list">
            {navigationInnerList}
          </ul>
        </div>
      </aside>
      <div className="control-panel__container">
        <Outlet
          context={[innerLinks, setInnerLinks, innerLinkPage, setInnerLinkPage]}
        />
      </div>
    </div>
  );
};

export default ControlPanel;
