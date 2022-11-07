import { Outlet } from "react-router-dom";

const CpRoot = () => {
  return (
    <>
      <h1>Control panel root</h1>
      <Outlet />
    </>
  );
};

export default CpRoot;
