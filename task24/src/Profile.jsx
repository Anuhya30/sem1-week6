import React from "react";
import "./Profile.css";

const Profile = ({ name, location, profilePicture }) => {
  return (
    <div className="profile-card">
      <img src={profilePicture} alt={`${name}'s profile`} className="profile-picture" />
      <h2 className="profile-name">{name}</h2>
      <p className="profile-location">{location}</p>
    </div>
  );
};

export default Profile;
