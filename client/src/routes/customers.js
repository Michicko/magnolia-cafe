import { useState } from "react";
import Buttons from "../components/Buttons";
import ListItem from "../components/ListItem";
import MainPageContent from "../components/MainPageContent";
import PageHeader from "../components/PageHeader";
import SearchInput from "../components/SearchInput";
import UseSetHeading from "../hooks/useSetHeading";
import { getKey } from "../utilities/utils";

const Customers = () => {
  UseSetHeading("Customers");
  const filters = ["all", "in-stock", "out-of-stock"];
  const [filterIndex, setFilterIndex] = useState(0);
  const index = filterIndex;
  const headerHeadings = ["S/N", "Name", "Email", "Address", "Telephone"];
  const options = [
    {
      type: "link",
      link: "/customers/:id",
      text: "view details",
    },
    {
      type: "btn",
      text: "delete customer",
      link: null,
    },
  ];
  const listItems = [
    {
      id: "32bh5g6",
      name: "John Doe",
      email: "john@mail.com",
      address: "12, boulevard st, Ny",
      telephone: "+1353636227",
    },
    {
      id: "12ch5b3",
      name: "Jane Doe",
      email: "jane@mail.com",
      address: "11, nork st, Ny",
      telephone: "+1233536427",
    },
    {
      id: "12ch5b3",
      name: "Mary Smith",
      email: "mary@mail.com",
      address: "2, wayne st, Ca",
      telephone: "+1345536227",
    },
    {
      id: "12ch5b3",
      name: "Payton sawyer",
      email: "payton@mail.com",
      address: "1, tree hill st, Ca",
      telephone: "+1675836227",
    },
  ];
  const listItemsComponent = (
    <ul className="pageContent__list">
      {listItems.map((listItem, i) => {
        const { name, email, address, telephone } = listItem;
        return (
          <ListItem key={getKey()} page="customers" i={i} listItem={listItem}>
            <span>{i + 1}</span>
            <span>{name}</span>
            <span>{email}</span>
            <span>{address}</span>
            <span>{telephone}</span>
          </ListItem>
        );
      })}
    </ul>
  );
  return (
    <div className="pagecomponent">
      <div className="pagecomponent__container">
        <PageHeader heading={"Customers"} searchInput={<SearchInput />} />
        <MainPageContent
          page="customers"
          headerHeadings={headerHeadings}
          listItemsComponent={listItemsComponent}
          options={options}
        />
      </div>
    </div>
  );
};

export default Customers;
