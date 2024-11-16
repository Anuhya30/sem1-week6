import React, { useState } from "react";
import "./app.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="app">
      <h1>Conditional Rendering </h1>
      <div className="content">
        {isLoggedIn ? (
          <div className="logged-in">
            <h2>Welcome back, User!</h2>
            <button onClick={() => setIsLoggedIn(false)}>Log Out</button>
          </div>
        ) : (
          <div className="logged-out">
            <h2>Please log in to continue</h2>
            <button onClick={() => setIsLoggedIn(true)}>Log In</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

