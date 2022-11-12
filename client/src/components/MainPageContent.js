import { useEffect, useRef } from "react";
import { useMainPageContext } from "../context/mainPageContext";
import Portal from "../Portal";
import { getKey } from "../utilities/utils";
import OptionsPanel from "./OptionsPanel";
import Pagination from "./Pagination";

const MainPageContent = ({
  headerHeadings,
  listItemsComponent,
  page,
  options,
}) => {
  const {
    closePanel,
    panelOpen,
    setPanelPos,
    currentListItem,
    currentElementIndex,
  } = useMainPageContext();
  const mainContentRef = useRef(null);

  // reposition panel when resize or scroll
  useEffect(() => {
    const checkCurrent = (e) => {
      const keys = [37, 38, 39, 40];
      if (panelOpen || (panelOpen && e.keyCode.contains(keys))) {
        const listItemBox = mainContentRef.current;
        const listItems = [
          ...listItemBox.firstElementChild.querySelectorAll(".listItem"),
        ];
        const currentElement = listItems[currentElementIndex];
        const elRect = currentElement.lastElementChild.getBoundingClientRect();
        const { top, left } = elRect;
        const pos = { top, left };
        setPanelPos(pos);
      }
    };

    window.addEventListener("resize", checkCurrent);
    window.addEventListener("scroll", checkCurrent);
    window.addEventListener("keydown", checkCurrent);

    return () => {
      window.removeEventListener("resize", checkCurrent);
      window.removeEventListener("scroll", checkCurrent);
      window.removeEventListener("keydown", checkCurrent);
    };
  }, [currentElementIndex, panelOpen, setPanelPos]);

  // close panel when clicked outsie panel
  useEffect(() => {
    const checkClicked = (e) => {
      if (e.target.classList.contains("listItem__btn")) {
        return;
      } else {
        closePanel();
      }
    };

    if (panelOpen) {
      document.body.addEventListener("click", checkClicked);
    }

    return () => {
      document.body.removeEventListener("click", checkClicked);
    };
  }, [closePanel, panelOpen]);

  return (
    <>
      <Portal>
        {panelOpen ? (
          <OptionsPanel currentListItem={currentListItem} options={options} />
        ) : null}
      </Portal>
      <div className="pageContent__box">
        <div className="pageContent__content">
          <div className="pageContent__content-header">
            <div className="pageContent__content-header-box">
              <ul className={`pageContent__content-header-headings ${page}`}>
                {headerHeadings.map((headerHeading) => {
                  return (
                    <li
                      className="pageContent__content-header-heading"
                      key={getKey()}
                    >
                      <h4 key={getKey()}>{headerHeading}</h4>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="pageContent__content-main" ref={mainContentRef}>
            {listItemsComponent}
          </div>
          <Pagination />
        </div>
      </div>
    </>
  );
};

export default MainPageContent;
