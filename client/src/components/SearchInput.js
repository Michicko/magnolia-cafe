import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <div className="form__group">
      <input
        type="search"
        name="search"
        id="search"
        className="form__group-input search"
        placeholder="Search"
      />
      <BsSearch className="form__group-icon" />
    </div>
  );
};

export default SearchInput;
