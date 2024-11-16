import React from "react";
import "./Button.css";

const Button = ({ children, onClick, customClass }) => {
  return (
    <button className={`button ${customClass}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
