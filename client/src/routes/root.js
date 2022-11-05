import { Outlet } from "react-router-dom";
import Cart from "../components/Cart";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import UseScrollToTop from "../hooks/useScrollToTop";
import Portal from "../Portal";

const Root = () => {
  return (
    <UseScrollToTop>
      <Portal>
        <Cart />
      </Portal>
      <Navbar />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </UseScrollToTop>
  );
};
export default Root;
