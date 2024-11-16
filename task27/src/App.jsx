import React from "react";
import UserCard from "./UserCard";

const App = () => {
  return (
    <div>
      <h1>User List</h1>

     
      <UserCard name="Anu" email="Anu123@.com" location="America" />

   
      <UserCard name="Akshu" email="Akshu345@.com" />

      
      <UserCard name="Abhi" />
    </div>
  );
};

export default App;

