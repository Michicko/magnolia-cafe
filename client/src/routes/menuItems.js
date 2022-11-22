import { useState } from "react";
import Buttons from "../components/Buttons";
import Filters from "../components/Filters";
import ListItem from "../components/ListItem";
import MainPageContent from "../components/MainPageContent";
import PageHeader from "../components/PageHeader";
import SearchInput from "../components/SearchInput";
import Sort from "../components/Sort";
import UseSetHeading from "../hooks/useSetHeading";
import { menuItems } from "../utilities/data";
import { getKey } from "../utilities/utils";

const MenuItems = () => {
  UseSetHeading("Menu Items");
  const [filterIndex, setFilterIndex] = useState(0);
  const index = filterIndex;
  const filters = ["all", "in-stock", "out-of-stock"];
  const headerHeadings = [
    "photo",
    "name",
    "Category",
    "description",
    "Stock",
    "price",
  ];
  const listItems = menuItems.slice(0, 6);

  const listItemsComponent = (
    <ul className="pageContent__list">
      {listItems.map((listItem, i) => {
        const { image, name, category, description, stock, price } = listItem;
        return (
          <ListItem key={getKey()} page="menuItems" i={i} listItem={listItem}>
            <img
              src={require(`../assets/images/${image}`)}
              alt={name}
              className="listItem__img"
            />
            <span>{name}</span>
            <span>{category}</span>
            {description !== null &&
            typeof description != "undefined" &&
            description === "" ? (
              <span>-</span>
            ) : (
              <span>{description}</span>
            )}
            {stock !== null && typeof stock !== "undefined" && stock === 0 ? (
              <span className="fail">out of stock</span>
            ) : (
              <span>{stock}</span>
            )}

            <span>${price}</span>
          </ListItem>
        );
      })}
    </ul>
  );
  const options = [
    {
      type: "link",
      link: "/menitems/:id",
      text: "view details",
    },
    {
      type: "btn",
      text: "delete item",
      link: null,
    },
  ];
  console.log(listItems);
  return (
    <div className="pagecomponent">
      <div className="pagecomponent__container">
        <PageHeader
          heading={"Menu Items"}
          button={
            <Buttons type={"create"} text="Add MenuItem" theme={"blue"} />
          }
        />
        <Filters
          filters={filters}
          index={index}
          search={<SearchInput />}
          sort={<Sort />}
        />
        <MainPageContent
          page={"menuItems"}
          headerHeadings={headerHeadings}
          listItemsComponent={listItemsComponent}
          options={options}
        />
      </div>
    </div>
  );
};

export default MenuItems;
