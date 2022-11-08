import { Route, Routes } from "react-router-dom";
import About from "./routes/about";
import Combos from "./routes/combos";
import Contact from "./routes/contact";
import CpRoot from "./routes/cpRoot";
import Customers from "./routes/customers";
import Dashboard from "./routes/dashboard";
import ErrorPage from "./routes/error-page";
import Home from "./routes/Home";
import Menu from "./routes/menu";
import MenuItems from "./routes/menuItems";
import Orders from "./routes/orders";
import Product from "./routes/product";
import Report from "./routes/report";
import Reservation from "./routes/reservation";
import Reservations from "./routes/reservations";
import Root from "./routes/root";
import Settings from "./routes/settings";

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
      <Route element={<CpRoot />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/menuItems" element={<MenuItems />} />
        <Route path="/combos" element={<Combos />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/report" element={<Report />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default App;
