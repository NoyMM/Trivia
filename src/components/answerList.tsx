import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { enableNextButton, updateChosenAnswer } from "../store/triviaSlice";
import IChosenAnswer from "../models/IChosenAnswer";
import Answer from "./answer";

const AnswerList: React.FC = () => {
  const dispatch = useDispatch();

  const questionIndex = useSelector(
    (state: RootState) => state.trivia.questionIndex
  );

  const answersList = useSelector(
    (state: RootState) => state.trivia.answersList[questionIndex]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(enableNextButton());
    const chosenAnswer: IChosenAnswer = {
      questionIndex: questionIndex,
      answer: e.target.value,
    };
    dispatch(updateChosenAnswer(chosenAnswer));
  };

  return (
    <>
      {Object.entries(answersList).map(([key, value]) => {
        return (
          <div key={`${key}_${questionIndex}`}>
            <input
              type="radio"
              name="button"
              value={key}
              onChange={handleChange}
            />
            <Answer answer={value} />
          </div>
        );
      })}
    </>
  );
};

export default AnswerList;
