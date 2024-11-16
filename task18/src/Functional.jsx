import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [message, setMessage] = useState("Hello");
  useEffect(() => {
    console.log("Component mounted or updated!");

    return () => {
      console.log("Component will unmount!");
    };
  }, [message]); 

  const toggleMessage = () => {
    setMessage((prevMessage) => (prevMessage === "Hello" ? "Goodbye" : "Hello"));
  };

  return (
    <div className="app-container">
      <h1>{message}, welcome to my React app!</h1>
      <button onClick={toggleMessage}>Toggle Message</button>
    </div>
  );
};

export default App;
