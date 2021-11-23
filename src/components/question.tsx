import React from "react";

interface IProp {
  text: string;
}

const Question: React.FC<IProp> = ({ text }) => {
  return <h2>{text}</h2>;
};

export default Question;
