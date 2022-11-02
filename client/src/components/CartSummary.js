const CartSummary = ({
  totalQunatity,
  subTotalPrice,
  deliveryCharge,
  heading,
}) => {
  return (
    <div className="cart__summary">
      <h3 className="cart__summary-heading">{heading}</h3>
      <div className="cart__summary-item">
        <h4>Subtotal</h4>
        <p>$60.30</p>
      </div>
      <div className="cart__summary-item">
        <h4>Delivery</h4>
        <p>$8.20</p>
      </div>
      <div className="cart__summary-line"></div>
      <div className="cart__summary-item total">
        <h4>Total</h4>
        <p>$68.50</p>
      </div>
      <button className="cart__summary-btn btn">Proceed to checkout</button>
    </div>
  );
};

export default CartSummary;
