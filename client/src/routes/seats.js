import { useState } from "react";
import UseSetHeading from "../hooks/useSetHeading";

const Seats = () => {
  UseSetHeading("Seats");
  const [filterIndex, setFilterIndex] = useState(0);
  const index = filterIndex;
  const filters = ["all", "reserved", "available"];
  const headerHeadings = ["Seat No", "Status", ""];
  return (
    <div className="seats">
      <h1>Seats</h1>
    </div>
  );
};

export default Seats;
