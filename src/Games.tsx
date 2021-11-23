import React from "react";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <>
      <h1>My Games</h1>
      <nav>
        <Link to="/Trivia">Trivia game</Link>
      </nav>
    </>
  );
};

export default HomePage;
