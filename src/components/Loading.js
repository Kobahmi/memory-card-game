import React from "react";
import logo from "../images/logo.png";

const Loading = () => {
  return (
    <div className="load-screen">
      <img className="load-logo" src={logo} alt="eevee" />
    </div>
  );
};

export default Loading;
