import React from "react";
import "./Notification.css";

const Notification = ({ message, type }) => {
  let notificationClass = "";

  if (type === "success") {
    notificationClass = "notification success";
  } else if (type === "error") {
    notificationClass = "notification error";
  } else if (type === "info") {
    notificationClass = "notification info";
  } else {
    notificationClass = "notification"; 
  }

  return (
    <div className={notificationClass}>
      <p>{message}</p>
    </div>
  );
};

export default Notification;
