const express = require("express");
const router = express.Router();
const verifyToken = require("../../middlewares/checkToken");
const getCategory = require("../../controllers/category/getCategory");
const addCategory = require("../../controllers/category/addCategory");
const updateCategory = require("../../controllers/category/updateCategory");
const deleteCategory = require("../../controllers/category/deleteCategory");
const checkAdmin = require("../../middlewares/checkAdmin");

router.get("/", verifyToken, getCategory);
router.post("/add-category", verifyToken, checkAdmin, addCategory);
router.put("/update-category/:id", verifyToken, checkAdmin, updateCategory);
router.delete("/delete-category/:id", verifyToken, checkAdmin, deleteCategory);

module.exports = router;
