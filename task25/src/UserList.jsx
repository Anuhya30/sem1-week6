import React from "react";
import UserCard from "./UserCard";
import "./UserList.css";

const UserList = () => {
  // Array of user data
  const users = [
    { id: 1, name: "Anu", email: "Anuhya@.com" },
    { id: 2, name: "Akshu", email: "Akshu123@.com" },
    { id: 3, name: "Abhi", email: "Abhi1123@.com" },
  ];

  return (
    <div className="user-list">
      <h1>User List</h1>
      {users.map((user) => (
        <UserCard key={user.id} name={user.name} email={user.email} />
      ))}
    </div>
  );
};

export default UserList;
