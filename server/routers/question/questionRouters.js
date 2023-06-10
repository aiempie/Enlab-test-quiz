const express = require("express");
const router = express.Router();
const verifyToken = require("../../middlewares/checkToken");
const getQuestions = require("../../controllers/question/getQuestions");
const addQuestions = require("../../controllers/question/addQuestions");
const updateQuestions = require("../../controllers/question/updateQuestion");
const deleteQuestions = require("../../controllers/question/deleteQuestion");
const getQuesBySetQuiz = require("../../controllers/question/getQuesBySetQuiz");
const checkAdmin = require("../../middlewares/checkAdmin");

router.get("/", verifyToken, getQuestions);
router.post("/add-question", verifyToken, checkAdmin, addQuestions);
router.post("/get-question-by-set-quiz", verifyToken, getQuesBySetQuiz);
router.put("/update-question/:id", verifyToken, checkAdmin, updateQuestions);
router.delete("/delete-question/:id", verifyToken, checkAdmin, deleteQuestions);

module.exports = router;
