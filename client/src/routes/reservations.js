import { useState } from "react";
import Filters from "../components/Filters";
import ListItem from "../components/ListItem";
import MainPageContent from "../components/MainPageContent";
import PageHeader from "../components/PageHeader";
import SearchInput from "../components/SearchInput";
import Status from "../components/Status";
import UseSetHeading from "../hooks/useSetHeading";
import { getKey } from "../utilities/utils";

const Reservations = () => {
  UseSetHeading("Reservations");
  const [filterIndex, setFilterIndex] = useState(0);
  const index = filterIndex;
  const filters = ["all", "pending", "in-progress", "completed", "failed"];
  const headerHeadings = ["ID", "Date", "Time", "Customer", "Status", "Seats"];
  const listItems = [
    {
      id: "6ga4ghs",
      date: "12-11-2022",
      time: "12:00",
      customer: "John Doe",
      seats: [2, 3, 4],
      status: "pending",
    },
    {
      id: "6ga4ghs",
      date: "12-11-2022",
      time: "12:00",
      customer: "John Doe",
      seats: [2, 3, 4],
      status: "in-progress",
    },
    {
      id: "6ga4ghs",
      date: "12-11-2022",
      time: "12:00",
      customer: "John Doe",
      seats: [2, 3, 4],
      status: "pending",
    },
    {
      id: "6ga4ghs",
      date: "12-11-2022",
      time: "12:00",
      customer: "John Doe",
      seats: [2, 3, 4],
      status: "completed",
    },
  ];

  const listItemsComponent = (
    <ul className="pageContent__list">
      {listItems.map((listItem, i) => {
        const { id, date, time, customer: name, seats, status } = listItem;
        return (
          <ListItem
            key={getKey()}
            page="reservations"
            i={i}
            listItem={listItem}
          >
            <span>#{id}</span>
            <span>{date}</span>
            <span>{time}</span>
            <span>{name}</span>
            <Status status={status} />
            <span className={seats}>{seats.join()}</span>
          </ListItem>
        );
      })}
    </ul>
  );

  const options = [
    {
      type: "link",
      link: "/reservations/:id",
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
        <PageHeader heading={"Reservations"} searchInput={<SearchInput />} />
        <Filters filters={filters} index={index} />
        <MainPageContent
          page="reservations"
          headerHeadings={headerHeadings}
          listItemsComponent={listItemsComponent}
          options={options}
        />
      </div>
    </div>
  );
};

export default Reservations;
