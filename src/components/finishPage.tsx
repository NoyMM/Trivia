import React from "react";

interface IProp {
  startOver: Function;
  getNumberOfCorrectAnswers: Function;
  numQuestions: number;
}

const FinishPage: React.FC<IProp> = ({
  startOver,
  getNumberOfCorrectAnswers,
  numQuestions,
}) => {
  return (
    <div>
      <h1>Good job!</h1>
      <h3>
        You answered correctly on {getNumberOfCorrectAnswers()} out of{" "}
        {numQuestions} questions
      </h3>
      <div className="startGame">
        <input className="startGameButton"
          type="submit"
          value="start over"
          onClick={() => {
            startOver();
          }}
        />
      </div>
    </div>
  );
};

export default FinishPage;
