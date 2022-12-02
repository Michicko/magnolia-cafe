import { IoMenu } from "react-icons/io5";
import { CgMathPlus } from "react-icons/cg";

const Pagination = ({ title, total }) => {
  return (
    <div className="filter">
      <div className="filter__box">
        <div className="filter__desc">
          <IoMenu className="filter__icon in-pag" />
          <p className="filter__text">
            Showing {total} {title}
          </p>
        </div>
        <button className="filter__btn bd-r">
          <CgMathPlus className="filter__icon" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
