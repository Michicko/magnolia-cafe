import { useOutletContext } from "react-router-dom";
import UseSetHeading from "../hooks/useSetHeading";

const Customers = () => {
  UseSetHeading("Customers");
  return <h1>Customers</h1>;
};

export default Customers;
