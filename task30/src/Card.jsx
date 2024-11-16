import React from "react";
import "./Card.css"; // Import the CSS file for styling

const Card = ({ children }) => {
  return (
    <div className="card">
      <div className="card-content">{children}</div>
    </div>
  );
};

export default Card;
