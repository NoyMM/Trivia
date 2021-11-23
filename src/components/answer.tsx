import React from "react";

interface IProp {
  answer: string;
}

const Answer: React.FC<IProp> = ({ answer }) => {
  return <span>{answer}</span>;
};

export default Answer;
