import { getKey } from "../utilities/utils";
import CategoryIcon from "./CategoryIcon";

const CategoryIconsBox = ({ categoryList, current, iconsRef }) => {
  return (
    <div className="menu__category-icons-box">
      <ul className="menu__category-icons" ref={iconsRef}>
        {categoryList.map((category, i) => {
          return (
            <CategoryIcon
              key={getKey()}
              name={category}
              current={current}
              i={i}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default CategoryIconsBox;
