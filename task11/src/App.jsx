import React from "react";
import "./App.css";
import Button from "./Button";
function App() {
  const handleClick = (label) => {
    alert(`You clicked the "${label}" button!`);
  };

  return (
    <div className="app">
      <h1>Reusable Button Component</h1>
      <div className="button-container">
        <Button text="Click Me" onClick={() => handleClick("Click Me")} />
        <Button text="Submit" onClick={() => handleClick("Submit")} />
        <Button text="Cancel" onClick={() => handleClick("Cancel")} />
      </div>
    </div>
  );
}

export default App;


   