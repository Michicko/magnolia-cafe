const Sort = () => {
  return (
    <select name="sort" id="sort" className="form__select">
      <option value="">Sort by</option>
      <option value="name">name</option>
      <option value="price highest">price highest</option>
      <option value="price lowest">price lowest</option>
    </select>
  );
};

export default Sort;
