import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDifficulty } from "../../api/difficulty";
import "./ReviewQuiz.css";
import { getQuesBySetQuiz } from "../../api/questions";

function ReviewQuiz() {
  const dispath = useDispatch();

  const questions = useSelector((state) => {
    return state.questions.questions.allQuestion;
  });
  const listDifficulty = useSelector((state) => {
    return state.difficulty.difficulty.difficulty;
  });
  const setQuizReiview = useSelector((state) => {
    return state.setQuiz.currentSetQuiz.currentSetQuiz;
  });
  const user = useSelector((state) => {
    return state.auth.login.currentUser;
  });

  const [isCompleted, setIsCompleted] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [yourScore, setYourScore] = useState(0);

  useEffect(() => {
    if (!setQuizReiview) {
      setIsCompleted(false);
    } else {
      setIsCompleted(true);
      if (!listDifficulty) {
        getDifficulty(dispath);
      }
      if (!questions) {
        getQuesBySetQuiz(setQuizReiview.answers, dispath);
      }
      setTotalScore(calTotalScore(questions, listDifficulty));
      setYourScore(calYourScore(setQuizReiview.answers, questions, listDifficulty));
    }
  }, [questions, setQuizReiview]);

  //tinh tong diem
  const calTotalScore = (listQues, diff) => {
    let total = 0;
    listQues.forEach((item) => {
      const diffItem = diff.find((d) => {
        return d._id === item.difficulty_id;
      });
      if (diffItem) {
        total += diffItem.score;
      }
    });
    return total;
  };

  const calYourScore = (setQuiz, listQues, diff) => {
    let trueQuiz = [];
    for (let i = 0; i < setQuiz.length; i++) {
      const foundItem = listQues.find(
        (item) =>
          item._id.toString() === setQuiz[i]._id && item.correctAnswer === setQuiz[i].answer,
      );
      if (foundItem) {
        trueQuiz.push(foundItem);
      }
    }
    return calTotalScore(trueQuiz, diff);
  };

  return (
    <div className="container review-quiz ">
      <h1 className="title text-light relative">Review Quiz</h1>
      {isCompleted ? (
        <div className="result flex-center mt-4">
          <div className="flex">
            <span>Username</span>
            <span className="bold">
              {setQuizReiview.user_id === user.user._id ? user.user.username : "******"}
            </span>
          </div>
          <div className="flex">
            <span>Total Questions:</span>
            <span className="bold">{questions.length} question</span>
          </div>
          <div className="flex">
            <span>Total Quiz Score:</span>
            <span className="bold">{totalScore} point</span>
          </div>
          <div className="flex">
            <span>Your Score:</span>
            <span className="bold">{yourScore} point</span>
          </div>
          <div className="flex">
            <span>Times:</span>
            <span className="bold">{setQuizReiview.times} second</span>
          </div>
          <div className="flex">
            <span>Quiz Result:</span>
            {yourScore / totalScore >= 0.5 ? (
              <span className="bold text-green-500">PASSED</span>
            ) : (
              <span className="bold text-red-500">NOT PASSED</span>
            )}
          </div>
          <a className="btn next mt-4 text-center" style={{ borderRadius: "1em" }} href="/play">
            Play Again
          </a>
          <a className="btn prev mt-4 text-center" style={{ borderRadius: "1em" }} href="/">
            Back to Home
          </a>
        </div>
      ) : (
        <div className="text-gray-200 text-2xl font-bold mt-4 text-center flex justify-center flex-col items-center">
          <span>You have not completed the quiz!</span>
          <span>Please come back and take the quiz before you review</span>
          <a className="btn next mt-4 text-center" style={{ borderRadius: "1em" }} href="/">
            Back to Home
          </a>
        </div>
      )}
    </div>
  );
}

export default ReviewQuiz;
