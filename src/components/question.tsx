import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const Question: React.FC = () => {
  const questionsList = useSelector(
    (state: RootState) => state.trivia.questionsList
  );

  const questionIndex = useSelector(
    (state: RootState) => state.trivia.questionIndex
  );

  return <h2>{questionsList[questionIndex]}</h2>;
};

export default Question;
