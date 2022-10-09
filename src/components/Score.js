import React from "react";

const Score = (props) => {
  return (
    <div className="score">
      Score: <span>{props.score}</span>
    </div>
  );
};

export default Score;
