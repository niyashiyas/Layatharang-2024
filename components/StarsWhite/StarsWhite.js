import React from "react";
import "./StarsWhite.css";
const StarsWhite = ({ children }) => {
  return (
    <div>
      {children}
      <div id="stars"></div>
    </div>
  );
};

export default StarsWhite;
