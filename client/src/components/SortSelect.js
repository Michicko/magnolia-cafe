const SortSelect = () => {
  return (
    <select name="sort" id="sort" className="form__sort-select">
      <option value={""}>Sort by</option>
      <option value="name">Name</option>
      <option value="price-lowest">Price - Lowest</option>
      <option value="price-highest">Price - Highest</option>
    </select>
  );
};

export default SortSelect;
