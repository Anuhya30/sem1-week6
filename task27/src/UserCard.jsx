import React from "react";

const UserCard = ({ name, email, location }) => {
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{location}</p>
    </div>
  );
};

// Setting default props
UserCard.defaultProps = {
  name: "Anonymous",
  email: "No email provided",
  location: "Unknown location"
};

export default UserCard;
