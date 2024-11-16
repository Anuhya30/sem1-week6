import React from "react";
import "./App.css";
import UserCard from "./Usercard";
function App() {

  const user1 = { name: "Anu", email: "Anuhya123@.com" };
  const user2 = { name: "Akshu", email: "Akshu456@.com" };

  return (
    <div className="app">
      <h1>User Information</h1>
      <div className="user-cards-container">
        
        <UserCard name={user1.name} email={user1.email} />
        <UserCard name={user2.name} email={user2.email} />
      </div>
    </div>
  );
}

export default App;

