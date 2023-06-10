const express = require("express");
const router = express.Router();
const verifyToken = require("../../middlewares/checkToken");
const getDiffculty = require("../../controllers/difficulty/getDifficulty");
const addDiffculty = require("../../controllers/difficulty/addDifficulty");
const updateDiffculty = require("../../controllers/difficulty/updateDifficulty");
const deleteDiffculty = require("../../controllers/difficulty/deleteDifficulty");
const checkAdmin = require("../../middlewares/checkAdmin");

router.get("/", verifyToken, getDiffculty);
router.post("/add-diffculty", verifyToken, checkAdmin, addDiffculty);
router.put("/update-diffculty/:id", verifyToken, checkAdmin, updateDiffculty);
router.delete("/delete-diffculty/:id", verifyToken, checkAdmin, deleteDiffculty);

module.exports = router;
