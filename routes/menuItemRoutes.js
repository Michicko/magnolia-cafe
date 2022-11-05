const express = require("express");
const {
  getMenuItems,
  getMenuItem,
  createMenuItem,
  updateMenuItem,
  deleteMenuItem,
} = require("../controllers/menuItemControllers");
const router = express.Router();

router.route("/").get(getMenuItems).post(createMenuItem);

router
  .route("/:menuItemSlug")
  .get(getMenuItem)
  .patch(updateMenuItem)
  .delete(deleteMenuItem);

module.exports = router;
