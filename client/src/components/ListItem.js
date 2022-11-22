import { useRef } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useMainPageContext } from "../context/mainPageContext";

const ListItem = ({ children, listItem, i, page }) => {
  const { setCurrentListItem, setCurrentElementIndex, openPanel, setPanelPos } =
    useMainPageContext();
  const boxRef = useRef(null);
  const openOptionsPanel = () => {
    setCurrentListItem(listItem);
    const actionItem = boxRef.current;
    const actionRect = actionItem.getBoundingClientRect();
    const { top, left } = actionRect;
    setCurrentElementIndex(i);
    const pos = { top, left };
    setPanelPos(pos);
    openPanel();
  };

  return (
    <li className={`listItem ${page}`}>
      {children}
      <div ref={boxRef}>
        <button className="listItem__btn" onClick={openOptionsPanel}>
          <BsThreeDotsVertical className="listItem__icon" />
        </button>
      </div>
    </li>
  );
};

export default ListItem;
