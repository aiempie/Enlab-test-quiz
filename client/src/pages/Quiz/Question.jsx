import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ShowQuestion from "../../components/Quiz/ShowQuestion";
import { getListQues } from "../../api/questions";
import { getDifficulty } from "../../api/difficulty";
import { addSetQuiz } from "../../api/setQuiz";

function randomCompare() {
  return Math.random() - 0.5;
}
let result = [];
function Question() {
  const category = useLocation().pathname.split("/")[2];
  const dispath = useDispatch();
  const questions = useSelector((state) => {
    return state.questions.questions.allQuestion;
  });
  const listDifficulty = useSelector((state) => {
    return state.difficulty.difficulty.difficulty;
  });

  const [isStart, setIsStart] = useState(false);
  const [isCompete, setComplete] = useState(false);
  const [quiz, setQuiz] = useState([]);
  const [numQues, setNumQues] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    getListQues(category, dispath);
    getDifficulty(dispath);
    result = [];
    //tao bo dem thoi gian
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    // Hủy interval khi component bị unmount
    return () => {
      clearInterval(interval);
    };
  }, [isActive]);

  const handNextQues = (data) => {
    result.push(data);
    if (numQues + 1 < quiz.length) {
      setNumQues(numQues + 1);
    } else {
      setIsActive(false);
      addSetQuiz(seconds, result, dispath);
      setComplete(true);
    }
  };
  const navigate = useNavigate();
  const reviewQuiz = () => {
    navigate("/review");
  };

  const handStartQuiz = () => {
    setQuiz(
      questions.map((item, index) => {
        const incorrectAnswers = [...item.incorrectAnswers];
        incorrectAnswers.push(item.correctAnswer);
        const listAnswer = incorrectAnswers.sort(randomCompare);
        const diffName = listDifficulty.find(
          (obj) => obj._id === item.difficulty_id,
        ).difficultyName;
        let ques = {
          _id: item._id,
          number: index,
          question: item.question,
          difficulty: diffName,
          answers: listAnswer,
        };
        return ques;
      }),
    );
    setIsStart(true);
    setIsActive(true);
  };

  return (
    <div className="container quiz ">
      <h1 className="title text-light relative">Quiz Application</h1>
      {isStart ? (
        <>
          <div className="absolute right-0 top-[8.5rem] p-1 float-right border border-dashed border-red-500 text-red-300">
            Time: {seconds}s
          </div>
          <ShowQuestion
            question={quiz[numQues]}
            handNextQues={handNextQues}
            isCompete={isCompete}
            reviewQuiz={reviewQuiz}
          />
        </>
      ) : (
        <div className="flex justify-center mt-5">
          <button className="btn next" onClick={handStartQuiz}>
            {" "}
            Click to start
          </button>
        </div>
      )}
    </div>
  );
}

export default Question;
