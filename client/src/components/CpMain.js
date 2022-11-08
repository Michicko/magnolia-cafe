import { Outlet } from "react-router-dom";

const CpMain = ({ setHeading }) => {
  return (
    <main className="cp-root__main">
      <Outlet context={setHeading} />
    </main>
  );
};

export default CpMain;
