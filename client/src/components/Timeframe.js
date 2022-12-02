import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Timeframe = ({ from, to, month }) => {
  return (
    <div className="filter">
      <div className="filter__box">
        <button className="filter__btn bd-l">
          <FiChevronLeft className="filter__icon" />
        </button>
        <div className="filter__desc">
          <p className="filter__text">
            {from} - {to} {month}
          </p>
        </div>
        <button className="filter__btn bd-r">
          <FiChevronRight className="filter__icon" />
        </button>
      </div>
    </div>
  );
};

export default Timeframe;
