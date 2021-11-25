import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IChosenAnswer from "../models/IChosenAnswer";
import {
  questionsListFromJson,
  answersListFromJson,
  correctAnswersFromJson,
  chosenAnswersFromJson,
  numQuestionsFromJson,
} from "../dataFromJson";

enum GameState {
  Start,
  GameOn,
  End,
}

export const triviaSlice = createSlice({
  name: "trivia",
  initialState: {
    gameState: GameState.Start,
    questionsList: questionsListFromJson,
    questionIndex: 0,
    answersList: answersListFromJson,
    correctAnswers: correctAnswersFromJson,
    chosenAnswers: chosenAnswersFromJson,
    numQuestions: numQuestionsFromJson,
    numberOfCorrectAnswers: 0,
    isNextButtonEnabled: false,
  },
  reducers: {
    startGame: (state) => {
      state.gameState = GameState.GameOn;
      state.questionIndex = 0;
      state.numQuestions = numQuestionsFromJson;
      state.chosenAnswers = chosenAnswersFromJson;
      state.numberOfCorrectAnswers = 0;
    },

    getNextPage: (state) => {
      if (state.questionIndex === state.numQuestions - 1) {
        state.gameState = GameState.End;
      } else {
        state.questionIndex++;
      }
    },

    getPrevPage: (state) => {
      if (state.questionIndex === 0) {
        state.gameState = GameState.Start;
      } else {
        state.questionIndex--;
      }
    },

    startOver: (state) => {
      state.gameState = GameState.Start;
    },

    updateChosenAnswer: (state, action: PayloadAction<IChosenAnswer>) => {
      state.chosenAnswers[action.payload.questionIndex] = action.payload.answer;
    },

    clacNumberOfCorrectAnswers: (state) => {
      state.numberOfCorrectAnswers = 0;
      state.correctAnswers.forEach((value, index) => {
        if (value === state.chosenAnswers[index]) {
          state.numberOfCorrectAnswers++;
        }
      });
    },

    enableNextButton: (state) => {
      state.isNextButtonEnabled = true;
    },

    disableNextButton: (state) => {
      state.isNextButtonEnabled = false;
    },
  },
});

export const {
  startGame,
  getNextPage,
  getPrevPage,
  startOver,
  updateChosenAnswer,
  clacNumberOfCorrectAnswers,
  enableNextButton,
  disableNextButton,
} = triviaSlice.actions;

export default triviaSlice.reducer;
