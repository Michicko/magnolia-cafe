import { Outlet } from "react-router-dom";

const CpMain = ({ setHeading }) => {
  return (
    <main className="cp-root__main">
      <div className="cp-root__main-container">
        <Outlet context={setHeading} />
      </div>
    </main>
  );
};

export default CpMain;
