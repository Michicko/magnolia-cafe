import { Navigate, Route, Routes } from "react-router-dom";
import About from "./routes/about";
import Combos from "./routes/combos";
import Contact from "./routes/contact";
import ControlPanel from "./routes/control-panel";
import ErrorPage from "./routes/error-page";
import Home from "./routes/Home";
import Menu from "./routes/menu";
import MenuItems from "./routes/menuItems";
import Orders from "./routes/orders";
import Product from "./routes/product";
import Reservation from "./routes/reservation";
import Root from "./routes/root";
import Settings from "./routes/settings";

const App = () => {
  return (
    <Routes>
      <Route element={<Root />}>
        <Route path="/" index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="reservation" element={<Reservation />} />
        <Route path="menu" element={<Menu />} />
        <Route path="menu/:menuSlug" element={<Product />} />
      </Route>
      <Route path="/cp/" element={<ControlPanel />}>
        <Route
          path="/cp/"
          element={<Navigate to={"/cp/orders/new"} replace />}
        />
        <Route
          path="/cp/orders"
          element={<Navigate to={"/cp/orders/new"} replace />}
        />
        <Route path="orders/:orderStatus" element={<Orders />} />
        <Route path="menuitems" element={<MenuItems />} />
        <Route path="combos" element={<Combos />} />
        <Route path="settings" element={<Settings />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default App;
