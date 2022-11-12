import { useRef } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useMainPageContext } from "../context/mainPageContext";

const ListItem = ({
  listItem,
  id,
  date,
  time,
  name,
  type,
  status,
  seats,
  amount,
  i,
  page,
}) => {
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
      <span>#{id}</span>
      <span>{date}</span>
      {time && <span>{time}</span>}
      <span>{name}</span>
      {type && <span className={type}>{type}</span>}
      {seats && <span className={seats}>{seats.join()}</span>}
      <span
        className={
          status === "completed"
            ? "success"
            : status === "failed"
            ? "fail"
            : status
        }
      >
        {status}
      </span>
      {amount && <span>${amount}</span>}
      <div ref={boxRef}>
        <button className="listItem__btn" onClick={openOptionsPanel}>
          <BsThreeDotsVertical className="listItem__icon" />
        </button>
      </div>
    </li>
  );
};

export default ListItem;
