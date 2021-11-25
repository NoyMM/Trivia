import React from "react";
import "../cssFiles/App.css";
import { useDispatch } from "react-redux";
import { startGame } from "../store/triviaSlice";
import { NavLink } from "react-router-dom";

const StartPage: React.FC = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(startGame());
  };

  return (
    <div>
      <h1>Welcome to my trivia game!</h1>
      <div className="startGame">
        <button className="startGameButton" type="submit" id="startButton">
          <NavLink to="/Trivia/1" onClick={handleClick}>
            Start Game
          </NavLink>
        </button>
      </div>
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/he/d/d4/Mickey_Mouse.png"
          alt="new"
        />
      </div>
    </div>
  );
};

export default StartPage;
