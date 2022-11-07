import React from "react";
import ReactDOM from "react-dom/client";
import "./global.scss";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/cartContext";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>
);
