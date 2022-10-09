import React from "react";

const Highscore = (props) => {
  return (
    <div className="score">
      Highscore: <span>{props.highscore}</span>
    </div>
  );
};

export default Highscore;
