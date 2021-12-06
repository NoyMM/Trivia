import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import Games from "./Games";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import QuestionPage from "./components/questionPage";
import FinishPage from "./components/finishPage";
import StartPage from "./components/startPage";
import { useAppDispatch } from "./store/hooks";
import { fetchTriviaDataAsync } from "./store/triviaSlice";

const AppWithRouting: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTriviaDataAsync());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <React.StrictMode>
        <Routes>
          <Route path="/" element={<Games />} />
          <Route path="/Trivia" element={<App />}>
            <Route path="" element={<StartPage />} />
            <Route path=":questionId" element={<QuestionPage />} />
            <Route path="FinishGame" element={<FinishPage />} />
          </Route>
        </Routes>
      </React.StrictMode>
    </BrowserRouter>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <AppWithRouting />
  </Provider>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
