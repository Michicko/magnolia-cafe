import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import UseScrollToTop from "../hooks/useScrollToTop";

const Root = () => {
  return (
    <UseScrollToTop>
      <Navbar />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </UseScrollToTop>
  );
};

export default Root;
