import React, { useState } from "react";
import { Link } from "react-router-dom";

const colorMapping = {
  easy: "bg-gray-500",
  medium: "bg-green-600",
  hard: "bg-yellow-600",
  extra: "bg-red-600",
};
function getColorByLevel(level) {
  const color = colorMapping[level.toLowerCase()];
  return color || "bg-gray-500";
}

function ShowQuestion(props) {
  const [check, setCheck] = useState(undefined);

  const question =
    !props.question || Object.keys(props.question).length !== 0
      ? props.question
      : {
          number: 1,
          question: "Question sample",
          difficulty: "Easy",
          answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        };
  const onSelectAnswer = (e) => {
    setCheck(e.target.value);
  };
  //next button handler
  const handOnNext = () => {
    props.handNextQues({ _id: question._id, answer: check });
    setCheck(undefined);
  };
  const handSubmit = () => {
    props.reviewQuiz();
  };
  return props.isCompete ? (
    <div className="flex justify-center flex-col items-center">
      <div className="text-gray-200 text-3xl font-bold mt-4 text-center">Completed quiz...!</div>
      <button className="btn prev mt-4" style={{ borderRadius: "1em" }} onClick={handSubmit}>
        Go to results now
      </button>
      <a className="btn next mt-4 text-center" style={{ borderRadius: "1em" }} href="/">
        Back to Home
      </a>
    </div>
  ) : (
    <>
      <div className="question">
        <h2 className="mt-4">Question {question.number + 1}</h2>
        <h4 className="text-gray-200 text-2xl font-bold mt-2 text-center">{question.question}</h4>
        <div className={`${getColorByLevel(question.difficulty)} rounded-md text-center mt-4`}>
          Level: {question.difficulty}
        </div>
        <ul key={question.number}>
          {question.answers.map((item, index) => {
            return (
              <li key={index}>
                <input
                  type="radio"
                  value={item}
                  name="options"
                  id={`option-${index}`}
                  onChange={onSelectAnswer}
                ></input>
                <label className="text-primary" htmlFor={`option-${index}`}>
                  {item}
                </label>
                <div className="check"></div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="grid">
        <div className=""></div>
        <button className="btn next" onClick={handOnNext} disabled={check === undefined}>
          Next
        </button>
      </div>
    </>
  );
}

export default ShowQuestion;
