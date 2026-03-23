const express = require("express");
const {
  getAllCafes,
  getCafeById,
  createCafe,
} = require("../controllers/cafeController");

const router = express.Router();

router.get("/", getAllCafes);
router.get("/:id", getCafeById);
router.post("/", createCafe);

module.exports = router;