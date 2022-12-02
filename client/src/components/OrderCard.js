import { getKey } from "../utilities/utils";
import BtnBox from "./BtnBox";

const OrderCard = ({ order }) => {
  const {
    id,
    date,
    time,
    name,
    telephone,
    type,
    amount,
    platform,
    items,
    additionalInfo,
    dispatchInfo,
    status,
  } = order;

  return (
    <div className="order-card">
      <div className="order-card__order-details">
        <div className="order-card__order-detail">
          <h5 className="card-heading cap">order id</h5>
          <p className="card-text cap">#{id}</p>
        </div>
        <div className="order-card__order-detail">
          <h5 className="card-heading cap">Date & time</h5>
          <p className="card-text cap">
            {date} at {time}
          </p>
        </div>
        <div className="order-card__order-detail">
          <h5 className="card-heading cap">name</h5>
          <p className="card-text cap">{name}</p>
        </div>
        <div className="order-card__order-detail">
          <h5 className="card-heading cap">telephone</h5>
          <p className="card-text cap">{telephone}</p>
        </div>
        <div className="order-card__order-detail">
          <h5 className="card-heading cap">type</h5>
          <p className="card-text cap">
            <span className={type}>{type}</span>
          </p>
        </div>
        <div className="order-card__order-detail">
          <h5 className="card-heading cap">amount</h5>
          <p className="card-text cap">${amount}</p>
        </div>
        <div className="order-card__order-detail">
          <h5 className="card-heading cap">platform</h5>
          <p className="card-text cap">{platform}</p>
        </div>
      </div>
      <div className="order-card__box">
        <div className="order-card__order-items">
          <h5 className="card-heading cap">ordered items</h5>
          {items.map((item) => {
            const { name, quantity } = item;
            return (
              <div className="order-card__order-item" key={getKey()}>
                <p className="card-text cap">
                  {name} X{quantity}
                </p>
              </div>
            );
          })}
        </div>
        {!additionalInfo && <BtnBox status={status} />}
      </div>
      {additionalInfo && (
        <div className="order-card__info-box">
          <div className="order-card__additional-info">
            <h5 className="card-heading">
              Additional information from customer
            </h5>
            <p className="card-text">{additionalInfo}</p>
          </div>
          <BtnBox status={status} />
        </div>
      )}
      {dispatchInfo && <div className="order-card__footer"></div>}
    </div>
  );
};

export default OrderCard;
