import { getKey } from "../utilities/utils";

const Filters = ({ filters, index, search, sort }) => {
  return (
    <div className="filters__box">
      <ul className="filters__list">
        {filters.map((filter, i) => {
          return (
            <button
              className={index === i ? "filters__btn active" : "filters__btn"}
              key={getKey()}
            >
              {filter}
            </button>
          );
        })}
      </ul>
      {search && search}
      {sort && sort}
    </div>
  );
};

export default Filters;
