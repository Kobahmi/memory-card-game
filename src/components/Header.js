import React from "react";
import Highscore from "./Highscore";
import Score from "./Score";
import logo from "../images/logo.png";

const Header = (props) => {
  const { score, highscore } = props;
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="logo" />
        <h1>Eeveelutions Memory Game v2</h1>
      </div>
      <div className="score-container">
        <Highscore highscore={highscore} />
        <Score score={score} />
      </div>
    </header>
  );
};

export default Header;
