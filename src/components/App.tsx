import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./App.css";

const App: React.FC = () => {
  return (
    <>
      <nav>
        <Link to="/">Home page</Link>
      </nav>
      <div className="App">
        <Outlet />
      </div>
    </>
  );
};

export default App;
