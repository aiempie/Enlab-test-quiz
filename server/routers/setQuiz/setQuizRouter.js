const express = require("express");
const router = express.Router();
const verifyToken = require("../../middlewares/checkToken");
const addSetQuiz = require("../../controllers/setQuiz/addSetQuiz");
const getListSetQuiz = require("../../controllers/setQuiz/getSetQuiz");

router.get("/", verifyToken, getListSetQuiz);
router.post("/add-set-quiz", verifyToken, addSetQuiz);

module.exports = router;
