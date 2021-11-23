import React from "react";
import Answer from "./answer";

interface IProp {
  answersList: object;
  questionIndex: number;
  enableButton: Function;
  updateChosenAnswer: Function;
}

const AnswerList: React.FC<IProp> = ({
  answersList,
  questionIndex,
  enableButton,
  updateChosenAnswer,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    enableButton();
    updateChosenAnswer(questionIndex, e.target.value);
  };

  return (
    <>
      {Object.entries(answersList).map(([key, value]) => {
        return (
          <div key={key + "_" + questionIndex}>
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
