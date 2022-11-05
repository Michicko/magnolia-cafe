const express = require("express");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");

const app = express();
const morgan = require("morgan");

// Routers
const menuItemsRouter = require("./routes/menuItemRoutes");
const menuCombosRouter = require("./routes/menuComboRoutes");

// if (process.env.NODE_ENV === "production") {
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// midddlewares
app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/api/v1/menuitems", menuItemsRouter);
app.use("/api/v1/combos", menuCombosRouter);

module.exports = app;
