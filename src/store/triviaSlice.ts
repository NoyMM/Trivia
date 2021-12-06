import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import IChosenAnswer from "../models/IChosenAnswer";

const TODO_ENDPOINT = "/triviaQuestions.json";

export const fetchTriviaDataAsync = createAsyncThunk(
  "trivia/fetch",
  async () => {
    const response = await fetch(TODO_ENDPOINT);
    return await response.json();
  }
);

export const triviaSlice = createSlice({
  name: "trivia",
  initialState: {
    questionsList: [""],
    answersList: new Array<Array<string>>(),
    correctAnswers: [""],
    chosenAnswers: [""],
    questionIndex: 0,
    isNextButtonEnabled: false,
  },
  reducers: {
    startGame: (state) => {
      state.chosenAnswers = new Array(state.questionsList.length).fill("");
      state.questionIndex = 0;
    },

    getNextPage: (state) => {
      state.questionIndex++;
    },

    getPrevPage: (state) => {
      state.questionIndex--;
    },

    updateChosenAnswer: (state, action: PayloadAction<IChosenAnswer>) => {
      state.chosenAnswers[action.payload.questionIndex] = action.payload.answer;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTriviaDataAsync.fulfilled, (state, action) => {
      const questions = new Array<string>();
      const answers = new Array<Array<string>>();
      const correctAnswers = new Array<string>();

      for (var item of action.payload) {
        questions.push(item.question);
        correctAnswers.push(item.correctAnswer);
        answers.push(item.answers);
      }
      state.questionsList = questions;
      state.answersList = answers;
      state.correctAnswers = correctAnswers;
      state.chosenAnswers = new Array(state.questionsList.length).fill("");
    });
  },
});

export const {
  startGame,
  getNextPage,
  getPrevPage,
  updateChosenAnswer,
} = triviaSlice.actions;

export default triviaSlice.reducer;
