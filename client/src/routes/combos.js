import { useState } from "react";
import Buttons from "../components/Buttons";
import CreateItem from "../components/CreateItem";
import Filters from "../components/Filters";
import ListItem from "../components/ListItem";
import MainPageContent from "../components/MainPageContent";
import PageHeader from "../components/PageHeader";
import SearchInput from "../components/SearchInput";
import SortSelect from "../components/SortSelect";
import UseSetHeading from "../hooks/useSetHeading";
import { getKey } from "../utilities/utils";

const Combos = () => {
  UseSetHeading("Combos");
  const filters = ["all", "in-stock", "out-of-stock"];
  const [filterIndex, setFilterIndex] = useState(0);
  const index = filterIndex;
  const headerHeadings = [
    "photo",
    "name",
    "category",
    "featured",
    "Stock",
    "price",
  ];

  const listItems = [
    {
      id: "26bh7j2",
      name: "chocolate croissant and almond latte macchiato",
      image: "breakfast-1.jpg",
      category: "breakfast",
      featured: true,
      stock: 5,
      price: 10,
    },
    {
      id: "24ba5j2",
      name: "vegetable bagel and cappuccino",
      image: "breakfast-2.jpg",
      category: "breakfast",
      featured: true,
      stock: 5,
      price: 11,
    },
    {
      id: "12bhch",
      name: "Avocado toast with egg & latte",
      image: "breakfast-3.jpg",
      category: "breakfast",
      featured: true,
      stock: 5,
      price: 12.5,
    },
  ];

  const listItemsComponent = (
    <ul className="pageContent__list">
      {listItems.map((listItem, i) => {
        const { image, name, category, featured, stock, price } = listItem;
        return (
          <ListItem key={getKey()} page="combos" i={i} listItem={listItem}>
            <img
              src={require(`../assets/images/${image}`)}
              alt={name}
              className="listItem__img"
            />
            <span>{name}</span>
            <span>{category}</span>
            {featured && (
              <span className={featured ? "featured" : null}>
                {featured ? "featured" : ""}
              </span>
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
      link: "/combos/:id",
      text: "view details",
    },
    {
      type: "btn",
      text: "delete item",
      link: null,
    },
  ];

  return (
    <div className="pagecomponent">
      <div className="pagecomponent__container">
        <PageHeader
          heading={"MenuItems"}
          button={<CreateItem link={"/create-combo"} text="Create MenuItem" />}
        />
        <PageHeader
          filters={<Filters filters={filters} index={index} />}
          searchInput={<SearchInput />}
          sortSelect={<SortSelect />}
        />
        <MainPageContent
          page={"combos"}
          headerHeadings={headerHeadings}
          listItemsComponent={listItemsComponent}
          options={options}
        />
      </div>
    </div>
  );
};

export default Combos;
