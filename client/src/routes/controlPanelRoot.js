import { Outlet } from "react-router-dom";

const ControlPanelRoot = () => {
  return (
    <>
      <h1>Controlpanel Root</h1>
      <Outlet />
    </>
  );
};

export default ControlPanelRoot;
