import React from "react";
import "./App.css";
import Button from "./Button"; 
function App() {
  const handleClick = (label) => {
    alert(`You clicked the "${label}" button!`);
  };

  return (
    <div className="app">
      <h1>Demonstrating Button Component Reusability</h1>
      <div className="button-container">
    
        <Button text="Click Me" onClick={() => handleClick("Click Me")} />
        <Button text="Submit" onClick={() => handleClick("Submit")} />
        <Button text="Cancel" onClick={() => handleClick("Cancel")} />
        <Button text="Learn More" onClick={() => handleClick("Learn More")} />
      </div>
    </div>
  );
}

export default App;

