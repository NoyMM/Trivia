import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import {
  disableNextButton,
  getNextPage,
  getPrevPage,
} from "../store/triviaSlice";
import { NavLink } from "react-router-dom";
import AnswerList from "./answerList";
import Question from "./question";
import "../cssFiles/App.css";

const QuestionPage: React.FC = () => {
  const dispatch = useDispatch();

  const questionsList = useSelector(
    (state: RootState) => state.trivia.questionsList
  );

  const questionIndex = useSelector(
    (state: RootState) => state.trivia.questionIndex
  );

  const isNextButtonEnabled = useSelector(
    (state: RootState) => state.trivia.isNextButtonEnabled
  );

  const questionNumber = questionIndex + 1;

  const handleClickBack = () => {
    dispatch(getPrevPage());
  };

  const handleClick = () => {
    dispatch(disableNextButton());
    dispatch(getNextPage());
  };

  return (
    <div>
      <div>
        <h4>
          Questions complited: {questionIndex} / {questionsList.length}
        </h4>
      </div>
      <Question />
      <AnswerList />
      <div>
        <button className="BackButton" type="submit" key={questionIndex + "b"}>
          <NavLink
            to={
              1 < questionNumber ? "/Trivia/" + (questionNumber - 1) : "/Trivia"
            }
            onClick={handleClickBack}
          >
            Back
          </NavLink>
        </button>
        <button
          className="NextButton"
          type="submit"
          key={questionIndex + "n"}
          disabled={!isNextButtonEnabled}
        >
          <NavLink
            to={
              questionNumber < questionsList.length
                ? "/Trivia/" + (questionNumber + 1)
                : "/Trivia/FinishGame"
            }
            onClick={handleClick}
          >
            Next
          </NavLink>
        </button>
      </div>
    </div>
  );
};

export default QuestionPage;
