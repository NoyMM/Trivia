import React, { useState } from "react";
import AnswerList from "./answerList";
import Question from "./question";
import "../cssFiles/App.css";

interface IProp {
  questionsList: Array<string>;
  answersList: Array<object>;
  questionIndex: number;
  updateChosenAnswer: Function;
  getNextPage: Function;
}

const QuestionPage: React.FC<IProp> = ({
  questionsList,
  answersList,
  questionIndex,
  updateChosenAnswer,
  getNextPage,
}) => {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const enableButton = () => {
    setButtonDisabled(false);
  };
  const handleClick = () => {
    setButtonDisabled(true);
    getNextPage();
  };

  return (
    <div>
      <div>
        <h4>
          Questions complited: {questionIndex} / {questionsList.length}
        </h4>
      </div>
      <Question text={questionsList[questionIndex]} />
      <AnswerList
        answersList={answersList[questionIndex]}
        questionIndex={questionIndex}
        enableButton={enableButton}
        updateChosenAnswer={updateChosenAnswer}
      />
      <div className="NextButton">
        <input
          type="submit"
          value="next"
          key={questionIndex}
          onClick={handleClick}
          disabled={buttonDisabled}
        />
      </div>
    </div>
  );
};

export default QuestionPage;
