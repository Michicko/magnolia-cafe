import UseSetHeading from "../hooks/useSetHeading";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
const Dashboard = () => {
  UseSetHeading("Dashboard");

  return (
    <div className="dashboard">
      <div className="dashboard__container">
        <div className="dashboard__top">
          <div className="dashboard__card-bg">
            <img
              src={require("../assets/images/card-big-bg.png")}
              alt="welcome bg"
              className="dashboard__card-bg-img"
            />
            <h4 className="dashboard__card-heading">Welcome</h4>
          </div>
          <div className="dashboard__card-sm sm-1">
            <p>pending orders</p>
            <h3>03</h3>
          </div>
          <div className="dashboard__card-sm">
            <p>completed orders</p>
            <h3>05</h3>
          </div>
        </div>
        <h3 className="dashboard__section-heading">Sales Report</h3>
        <div className="dashboard__bottom">
          <div className="dashboard__card-bt">
            <span>
              <AiOutlineDollarCircle className="dashboard__card-bt-icon" />
            </span>
            <div>
              <p>Today's sales</p>
              <div className="div">
                <h4>$500.00</h4>
                <Link to="/orders" className="dashboard__card-bt-link">
                  view all
                </Link>
              </div>
            </div>
          </div>
          <div className="dashboard__card-bt">
            <span>
              <AiOutlineDollarCircle className="dashboard__card-bt-icon" />
            </span>
            <div>
              <p>Yesterday's sales</p>
              <div className="div">
                <h4>$299.67</h4>
                <Link to="/orders" className="dashboard__card-bt-link">
                  view all
                </Link>
              </div>
            </div>
          </div>
          <div className="dashboard__card-bt">
            <div>
              <p>Today's Orders</p>
              <div className="div">
                <h4>20</h4>
                <Link to="/orders" className="dashboard__card-bt-link">
                  view all
                </Link>
              </div>
            </div>
          </div>
          <div className="dashboard__card-bt">
            <div>
              <p>Yesterday's Orders</p>
              <div className="div">
                <h4>100</h4>
                <Link to="/orders" className="dashboard__card-bt-link">
                  view all
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
