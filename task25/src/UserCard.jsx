import React from "react";
import "./UserCard.css";

const UserCard = ({ name, email }) => {
  return (
    <div className="user-card">
      <h2 className="user-name">{name}</h2>
      <p className="user-email">{email}</p>
    </div>
  );
};

export default UserCard;
