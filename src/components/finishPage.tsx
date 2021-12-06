import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { RootState } from "../store";

const calcNumberOfCorrectAnswers = (
  correctAnswers: string[],
  chosenAnswers: string[]
) => {
  let numCorrectAnswers = 0;
  correctAnswers.forEach((value, index) => {
    if (value === chosenAnswers[index]) {
      numCorrectAnswers++;
    }
  });
  return numCorrectAnswers;
};

const FinishPage: React.FC = () => {
  const correctAnswers = useSelector(
    (state: RootState) => state.trivia.correctAnswers
  );

  const chosenAnswers = useSelector(
    (state: RootState) => state.trivia.chosenAnswers
  );

  const numberOfcorrectAnswers = calcNumberOfCorrectAnswers(
    correctAnswers,
    chosenAnswers
  );

  const numQuestions = correctAnswers.length;

  return (
    <div>
      <h1>Good job!</h1>
      <h3>
        You answered correctly on {numberOfcorrectAnswers} out of {numQuestions}{" "}
        questions
      </h3>
      <div className="startGame">
        <button className="startGameButton" type="submit" id="startOverButton">
          <NavLink to="/Trivia">Start over</NavLink>
        </button>
      </div>
    </div>
  );
};

export default FinishPage;
