import Pagination from "./Pagination";
import Searchbar from "./Searchbar";
import Timeframe from "./Timeframe";
import { CgMenuLeftAlt } from "react-icons/cg";

const ControlPanelLayout = ({
  currentPage,
  showBorder,
  showFilters,
  showTimeframe,
  showSearchbar,
  showPagination,
  showFilterButton,
  filterButton,
  noFilterBtn,
  children,
}) => {
  return (
    <div className="control-panel__layout">
      <header className="control-panel__topbar">
        <div className="control-panel__heading-box">
          <CgMenuLeftAlt className="control-panel__menu" />
          <h3 className="topbar-heading">{currentPage}</h3>
          {!showFilters && noFilterBtn && { noFilterBtn }}
        </div>
        {showFilters && (
          <div className="control-panel__filters-box">
            <div className="control-panel__filters-box-inner">
              <div className="control-panel__filters">
                {showSearchbar && <Searchbar />}
                {showTimeframe && (
                  <Timeframe from={1} to={7} month={"January"} />
                )}
                {showPagination && <Pagination total={10} title="orders" />}
              </div>
              {showFilterButton && { filterButton }}
            </div>
          </div>
        )}
        {showBorder && <div className="line"></div>}
      </header>
      <main className="control-panel__main">
        <div className="control-panel__content">{children}</div>
      </main>
    </div>
  );
};

export default ControlPanelLayout;
