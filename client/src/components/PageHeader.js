const PageHeader = ({ heading, searchInput, dateInput }) => {
  return (
    <div className="pageHeader">
      <h3 className="pageHeader__heading">{heading}</h3>
      <div className="pageHeader__container">
        {searchInput}
        {dateInput}
      </div>
    </div>
  );
};

export default PageHeader;
