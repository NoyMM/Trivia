import React from "react";
import "../cssFiles/App.css";

interface IProp {
  startGame: Function;
}

const StartPage: React.FC<IProp> = ({ startGame }) => {
  return (
    <div>
      <h1>Welcome to my trivia game!</h1>
      <div className="startGame">
        <input className="startGameButton"
          type="submit"
          value="Start Game"
          onClick={() => {
            startGame();
          }}
        />
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
