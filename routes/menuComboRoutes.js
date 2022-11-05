const express = require("express");
const {
  getCombos,
  createCombo,
  getCombo,
  updateCombo,
  deleteCombo,
} = require("../controllers/menuComboControllers");
const router = express.Router();

router.route("/").get(getCombos).post(createCombo);

router
  .route("/:comboSlug")
  .get(getCombo)
  .patch(updateCombo)
  .delete(deleteCombo);

module.exports = router;
