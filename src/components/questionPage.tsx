import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { getNextPage, getPrevPage } from "../store/triviaSlice";
import { NavLink } from "react-router-dom";
import AnswerList from "./answerList";
import Question from "./question";
import "./App.css";

const calcPathToPrevPage = (questionNumber: number) => {
  return 1 < questionNumber ? "/Trivia/" + (questionNumber - 1) : "/Trivia";
};

const calcPathToNextPage = (questionNumber: number, numQuestions: number) => {
  return questionNumber < numQuestions
    ? "/Trivia/" + (questionNumber + 1)
    : "/Trivia/FinishGame";
};

const QuestionPage: React.FC = () => {
  const questionsList = useSelector(
    (state: RootState) => state.trivia.questionsList
  );

  const questionIndex = useSelector(
    (state: RootState) => state.trivia.questionIndex
  );

  const questionNumber = questionIndex + 1;

  const dispatch = useDispatch();

  const handleClickBack = () => {
    dispatch(getPrevPage());
  };

  const handleClickNext = () => {
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
        <button className="BackButton" type="submit">
          <NavLink
            to={calcPathToPrevPage(questionNumber)}
            onClick={handleClickBack}
          >
            Back
          </NavLink>
        </button>
        <button className="NextButton" type="submit">
          <NavLink
            to={calcPathToNextPage(questionNumber, questionsList.length)}
            onClick={handleClickNext}
          >
            Next
          </NavLink>
        </button>
      </div>
    </div>
  );
};

export default QuestionPage;
