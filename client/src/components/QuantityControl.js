import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const QuantityControl = ({ quantity, size }) => {
  return (
    <div className={`product__ctrl ${size}`}>
      <button className={`product__btn ${size}`}>
        <AiOutlineMinus className="icon sm secondary" />
      </button>
      <input
        type="number"
        name="quantity"
        id="portion"
        className={`product__input ${size}`}
        value={quantity}
      />
      <button className={`product__btn ${size}`}>
        <AiOutlinePlus className="icon sm secondary" />
      </button>
    </div>
  );
};

export default QuantityControl;
