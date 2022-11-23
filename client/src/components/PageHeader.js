const PageHeader = ({
  filters,
  heading,
  searchInput,
  dateInput,
  sortSelect,
  button,
}) => {
  return (
    <div className="pageHeader">
      {filters}
      {heading && <h3 className="pageHeader__heading">{heading}</h3>}
      <div className="pageHeader__container">
        {searchInput}
        {dateInput}
        {sortSelect}
        {button}
      </div>
    </div>
  );
};

export default PageHeader;
