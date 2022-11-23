import { useState } from "react";
import CreateItem from "../components/CreateItem";
import DateGroupInput from "../components/DateGroupInput";
import Filters from "../components/Filters";
import ListItem from "../components/ListItem";
import MainPageContent from "../components/MainPageContent";
import PageHeader from "../components/PageHeader";
import SearchInput from "../components/SearchInput";
import SortSelect from "../components/SortSelect";
import UseSetHeading from "../hooks/useSetHeading";
import { menuItems } from "../utilities/data";
import { getKey } from "../utilities/utils";

const MenuItems = () => {
  UseSetHeading("Menu Items");
  const filters = ["all", "in-stock", "out-of-stock"];
  const [filterIndex, setFilterIndex] = useState(0);
  const index = filterIndex;
  const headerHeadings = [
    "Image",
    "Name",
    "Category",
    "Description",
    "Stock",
    "Amount",
  ];
  const listItems = menuItems.slice(0, 6);

  const listItemsComponent = (
    <ul className="pageContent__list">
      {listItems.map((listItem, i) => {
        const { image, name, category, description, stock, price } = listItem;
        return (
          <ListItem page="menuItems" listItem={listItem} i={i} key={getKey()}>
            <img
              src={require(`../assets/images/${image}`)}
              alt={name}
              className="listItem__img"
            />
            <span>{name}</span>
            <span>{category}</span>
            <span>{!description ? "-" : description}</span>
            <span className={stock === 0 ? "fail" : null}>
              {stock > 0 ? stock : "out of stock"}
            </span>
            <span>${price}</span>
          </ListItem>
        );
      })}
    </ul>
  );
  const options = [
    {
      type: "link",
      link: "/orders/:id",
      text: "view details",
    },
    {
      type: "btn",
      text: "change status",
      link: null,
    },
  ];
  return (
    <div className="pagecomponent">
      <div className="pagecomponent__container">
        <PageHeader
          heading={"MenuItems"}
          button={
            <CreateItem link={"/create-menuitem"} text="Create MenuItem" />
          }
        />
        <PageHeader
          filters={<Filters filters={filters} index={index} />}
          searchInput={<SearchInput />}
          sortSelect={<SortSelect />}
        />
        <MainPageContent
          page="menuItems"
          headerHeadings={headerHeadings}
          options={options}
          listItemsComponent={listItemsComponent}
        />
      </div>
    </div>
  );
};

export default MenuItems;
