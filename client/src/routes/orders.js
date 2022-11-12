import UseSetHeading from "../hooks/useSetHeading";
import { getKey } from "../utilities/utils";
import { useState } from "react";
import { orders } from "../utilities/data";
import PageHeader from "../components/PageHeader";
import SearchInput from "../components/SearchInput";
import DateGroupInput from "../components/DateGroupInput";
import Filters from "../components/Filters";
import MainPageContent from "../components/MainPageContent";
import ListItem from "../components/ListItem";

const Orders = () => {
  UseSetHeading("Orders");
  const filters = ["all", "pending", "in-progress", "completed", "failed"];
  const [filterIndex, setFilterIndex] = useState(0);
  const index = filterIndex;
  const headerHeadings = ["ID", "Date", "Customer", "Type", "Status", "Amount"];

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

  const listItemsComponent = (
    <ul className="pageContent__list">
      {orders.map((order, i) => {
        const { id, date, name, type, status, amount } = order;
        return (
          <ListItem
            listItem={order}
            id={id}
            date={date}
            name={name}
            type={type}
            status={status}
            amount={amount}
            key={getKey()}
            i={i}
            page="orders"
          />
        );
      })}
    </ul>
  );

  return (
    <div className="pagecomponent">
      <div className="pagecomponent__container">
        <PageHeader
          heading={"Orders"}
          searchInput={<SearchInput />}
          dateInput={<DateGroupInput />}
        />
        <Filters filters={filters} index={index} />
        <MainPageContent
          page="orders"
          headerHeadings={headerHeadings}
          options={options}
          listItemsComponent={listItemsComponent}
        />
      </div>
    </div>
  );
};

export default Orders;
