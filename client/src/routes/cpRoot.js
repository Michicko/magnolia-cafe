import { Outlet } from "react-router-dom";
import CpSidebar from "../components/CpSidebar";
import CpMain from "../components/CpMain";
import CpTopbar from "../components/CpTopbar";
import { useState } from "react";
import { MainPageProvider } from "../context/mainPageContext";

const CpRoot = () => {
  const [heading, setHeading] = useState("");
  return (
    <div className="cp-root">
      <CpSidebar />
      <div className="cp-root__content-box">
        <CpTopbar heading={heading} />
        <MainPageProvider>
          <CpMain setHeading={setHeading} />
        </MainPageProvider>
      </div>
    </div>
  );
};

export default CpRoot;
