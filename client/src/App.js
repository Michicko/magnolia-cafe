import { Route, Routes } from "react-router-dom";
import About from "./routes/about";
import Contact from "./routes/contact";
import ControlPanelRoot from "./routes/controlPanelRoot";
import ErrorPage from "./routes/error-page";
import Home from "./routes/Home";
import Menu from "./routes/menu";
import Orders from "./routes/orders";
import Product from "./routes/product";
import Reservation from "./routes/reservation";
import Root from "./routes/root";

const App = () => {
  return (
    <Routes>
      <Route element={<Root />}>
        <Route path="/" index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/:menuSlug" element={<Product />} />
      </Route>
      <Route element={<ControlPanelRoot />}>
        <Route path="/orders" element={<Orders />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default App;
