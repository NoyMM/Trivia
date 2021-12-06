import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { updateChosenAnswer } from "../store/triviaSlice";
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

  // const chosenAnswer = useSelector(
  //   (state: RootState) => state.trivia.chosenAnswers[questionIndex]
  // );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const chosenAnswer: IChosenAnswer = {
      questionIndex: questionIndex,
      answer: e.target.value,
    };
    dispatch(updateChosenAnswer(chosenAnswer));
  };

  // const isButtonSelected = (e: any) => {
  //   return chosenAnswer === e.target.value;
  // }

  return (
    <>
      {answersList.map((element, index) => {
        return (
          <div key={questionIndex.toString() + "_" + index}>
            <input type="radio" name="radioButton" onChange={handleChange} value={index + 1}/>
            <Answer answer={element} />
          </div>
        );
      })}
    </>
  );
};

export default AnswerList;
