import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../cssFiles/App.css";
import FinishPage from "./finishPage";
import QuestionPage from "./questionPage";
import StartPage from "./startPage";

enum GameState {
  Start,
  GameOn,
  End,
}

const App: React.FC = () => {
  const [gameState, setGameState] = useState(GameState.Start);
  const [questionsList, setquestionsList] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answersList, setAnswerList] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [chosenAnswers, setChosenAnswers] = useState([""]);
  const [numQuestions, setNumQuestions] = useState(1);

  useEffect(() => {
    fetch("triviaQuestions.json")
      .then((response) => response.json())
      .then((items) => {
        setquestionsList(items);
      });
    fetch("triviaAnswers.json")
      .then((response) => response.json())
      .then((items) => {
        setAnswerList(items);
      });
    fetch("triviaCorrectAnswers.json")
      .then((response) => response.json())
      .then((items) => {
        setCorrectAnswers(items);
      });
  }, []);

  const startGame = () => {
    setGameState(GameState.GameOn);
    setQuestionIndex(0);
    setNumQuestions(questionsList.length);
    setChosenAnswers(Array(questionsList.length).fill(""));
  };

  const getNextPage = () => {
    if (questionIndex === numQuestions - 1) {
      setGameState(GameState.End);
    } else {
      setQuestionIndex(questionIndex + 1);
    }
  };

  const startOver = () => {
    setGameState(GameState.Start);
  };

  const updateChosenAnswer = (index: number, answerIndex: string) => {
    let updatedChosenAnswers = chosenAnswers;
    updatedChosenAnswers[index] = answerIndex;
    setChosenAnswers(updatedChosenAnswers);
  };

  const getNumberOfCorrectAnswers = () => {
    let numberOfCorrectAnswers: number = 0;
    correctAnswers.forEach((value, index) => {
      if (value === chosenAnswers[index]) {
        numberOfCorrectAnswers++;
      }
    });
    return numberOfCorrectAnswers;
  };

  const renderSwitch = () => {
    switch (gameState) {
      case GameState.Start:
        return <StartPage startGame={startGame} />;
      case GameState.GameOn:
        return (
          <QuestionPage
            questionsList={questionsList}
            answersList={answersList}
            getNextPage={getNextPage}
            questionIndex={questionIndex}
            updateChosenAnswer={updateChosenAnswer}
          />
        );
      case GameState.End:
        return (
          <FinishPage
            startOver={startOver}
            getNumberOfCorrectAnswers={getNumberOfCorrectAnswers}
            numQuestions={numQuestions}
          />
        );
    }
  };

  return (
    <>
      <nav>
        <Link to="/">Home page</Link>
      </nav>
      <div className="App">{renderSwitch()}</div>
    </>
  );
};

export default App;
