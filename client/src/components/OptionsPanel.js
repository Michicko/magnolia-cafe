import { Link } from "react-router-dom";
import { useMainPageContext } from "../context/mainPageContext";
import { getKey } from "../utilities/utils";

const OptionsPanel = ({ currentListItem, options }) => {
  const { panelPos } = useMainPageContext();
  const styles = {
    top: `${panelPos.top - 70}px`,
    left: `${panelPos.left - 100}px`,
  };
  return (
    <div className="optionspanel" style={styles}>
      {options.map((option) => {
        if (option.type === "btn") {
          return (
            <button className="optionspanel__btn" key={getKey()}>
              {option.text}
            </button>
          );
        }
        const { link } = option;
        const replacedLink = link.replace(":id", currentListItem.id);
        return (
          <Link to={replacedLink} key={getKey()}>
            {option.text}
          </Link>
        );
      })}
    </div>
  );
};

export default OptionsPanel;
