import React, { useState } from "react";
import Header from "./Header";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="app">
      <Header />
      <div className="content">
        <h2>Conditional Rendering Example</h2>
        {isLoggedIn ? (
          <div className="logged-in">
            <p>Welcome back, User!</p>
            <button onClick={() => setIsLoggedIn(false)}>Log Out</button>
          </div>
        ) : (
          <div className="logged-out">
            <p>Please log in to continue.</p>
            <button onClick={() => setIsLoggedIn(true)}>Log In</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
