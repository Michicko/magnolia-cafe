import { Outlet } from "react-router-dom";
import CpSidebar from "../components/CpSidebar";
import CpMain from "../components/CpMain";
import CpTopbar from "../components/CpTopbar";
import { useState } from "react";

const CpRoot = () => {
  const [heading, setHeading] = useState("");
  return (
    <div className="cp-root">
      <CpSidebar />
      <div className="cp-root__content-box">
        <CpTopbar heading={heading} />
        <CpMain setHeading={setHeading} />
      </div>
    </div>
  );
};

export default CpRoot;
