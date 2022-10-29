import { useEffect } from "react";
import { useLocation } from "react-router";

const UseScrollToTop = ({ children }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
  }, [pathname]);
  return children || null;
};

export default UseScrollToTop;
