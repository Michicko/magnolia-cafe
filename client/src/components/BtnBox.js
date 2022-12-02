const BtnBox = ({ status, handleView, onClick }) => {
  return (
    <div className="order-card__btn-box">
      {status === "new" && (
        <button className="order-btn outline">view order</button>
      )}
      {status === "new" ? (
        <button className="order-btn new">Accept order</button>
      ) : status === "accepted" ? (
        <button className="order-btn blue cap">preparing</button>
      ) : status === "preparing" ? (
        <button className="order-btn blue cap">packaged</button>
      ) : status === "packaged" ? (
        <button className="order-btn blue cap">dispatched</button> ? (
          status === "dispatched"
        ) : (
          <button className="order-btn blue cap">completed</button>
        )
      ) : null}
    </div>
  );
};

export default BtnBox;
