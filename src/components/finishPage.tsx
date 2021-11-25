import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { RootState } from "../store";
import { clacNumberOfCorrectAnswers, startOver } from "../store/triviaSlice";

const FinishPage: React.FC = () => {
  const dispatch = useDispatch();

  dispatch(clacNumberOfCorrectAnswers());

  const numberOfCorrectAnswers = useSelector(
    (state: RootState) => state.trivia.numberOfCorrectAnswers
  );

  const numQuestions = useSelector(
    (state: RootState) => state.trivia.numQuestions
  );

  const handleClick = () => {
    dispatch(startOver());
  };

  return (
    <div>
      <h1>Good job!</h1>
      <h3>
        You answered correctly on {numberOfCorrectAnswers} out of {numQuestions}{" "}
        questions
      </h3>
      <div className="startGame">
        <button className="startGameButton" type="submit" id="startOverButton">
          <NavLink to="/Trivia" onClick={handleClick}>
            Start over
          </NavLink>
        </button>
      </div>
    </div>
  );
};

export default FinishPage;
