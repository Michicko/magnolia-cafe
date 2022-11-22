const PageHeader = ({ heading, searchInput, dateInput, button }) => {
  return (
    <div className="pageHeader">
      <h3 className="pageHeader__heading">{heading}</h3>
      <div className="pageHeader__container">
        {searchInput}
        {dateInput}
        {button}
      </div>
    </div>
  );
};

export default PageHeader;
