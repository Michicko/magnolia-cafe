import OrderCard from "../components/OrderCard";
import ControlPanelLayout from "../components/ControlPanelLayout";
import { getKey } from "../utilities/utils";
import { useOutletContext, useParams } from "react-router-dom";
import { useEffect } from "react";
import emptyPackage from "../assets/images/packaging.svg";

const Orders = () => {
  const orders = [
    {
      id: "9074j9kj",
      date: "01/12/2022",
      time: "04:50 am",
      name: "john doe",
      telephone: "+1 234 567 8901",
      type: "delivery",
      amount: 15.55,
      platform: "mobile",
      status: "new",
      additionalInfo:
        "half and half milk for 1 cappucino and oat milk for another",
      dispatchInfo: {},
      items: [
        {
          name: "Cappuccino",
          price: 5.4,
          quantity: 2,
        },
        {
          name: "double chocolate brownie",
          price: 4,
          quantity: 1,
        },
        {
          name: "cinnamon roll",
          price: 4,
          quantity: 3,
        },
      ],
    },
    {
      id: "5273g9ba",
      date: "20/11/2022",
      time: "02:15 pm",
      name: "jane doe",
      telephone: "+1 234 567 8901",
      type: "takeaway",
      amount: 5.25,
      platform: "website",
      status: "completed",
      additionalInfo: "",
      dispatchInfo: {},
      items: [
        {
          name: "Cappuccino",
          price: 5.4,
          quantity: 2,
        },
        {
          name: "double chocolate brownie",
          price: 4,
          quantity: 1,
        },
        {
          name: "cinnamon roll",
          price: 4,
          quantity: 3,
        },
      ],
    },
    {
      id: "3453c5ba",
      date: "15/11/2022",
      time: "01:14 am",
      name: "Amanda smith",
      telephone: "+1 234 567 8901",
      type: "delivery",
      amount: 6.25,
      platform: "website",
      status: "new",
      additionalInfo: "Oat milk and Rose flavor",
      dispatchInfo: {},
      items: [
        {
          name: "Cappuccino",
          price: 5.4,
          quantity: 1,
        },
        {
          name: "cinnamon roll",
          price: 4,
          quantity: 1,
        },
      ],
    },
  ];

  const tempLinks = ["new", "accepted", "preparing", "dispatched", "completed"];

  const getTotalItems = (item, array) => {
    const filtered = array.filter((el) => el.status === item);
    return filtered.length;
  };
  const links = tempLinks.map((tempLink) => {
    return {
      type: "link",
      link: tempLink,
      totalItems: getTotalItems(tempLink, orders),
    };
  });

  const [innerLinks, setInnerLinks, innerLinkPage, setInnerLinkPage] =
    useOutletContext();

  useEffect(() => {
    setInnerLinks(links);
  }, []);

  const params = useParams();

  useEffect(() => {
    setInnerLinkPage(params.orderStatus);
  }, [params]);

  const filteredOrders = orders.filter(
    (order) => order.status === params.orderStatus
  );

  return (
    <div className="orders">
      <ControlPanelLayout
        currentPage={`${innerLinkPage} orders`}
        showFilters={true}
        showPagination={true}
        showTimeframe={params.orderStatus === "completed" ? true : false}
        showBorder={true}
        showSearchbar={false}
        showFilterButton={false}
      >
        {filteredOrders.length > 0 ? (
          <div className="orders__list">
            {filteredOrders.map((order) => {
              return <OrderCard order={order} key={getKey()} />;
            })}
          </div>
        ) : (
          <div className="orders__empty-box">
            <img
              src={emptyPackage}
              alt="empty package"
              className="orders__empty-package"
            />
            <h5>No orders available at the moment</h5>
            <p>Check back later.</p>
          </div>
        )}
      </ControlPanelLayout>
    </div>
  );
};

export default Orders;
