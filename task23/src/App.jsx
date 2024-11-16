import React from "react";
import Button from "./Button";

const App = () => {
  const handleClick = (type) => {
    alert(`You clicked the ${type} button!`);
  };

  return (
    <div>
      <h1>Reusable Button Component</h1>
      
      <Button customClass="primary" onClick={() => handleClick("Primary")}>
        Primary Button
      </Button>

      <Button customClass="secondary" onClick={() => handleClick("Secondary")}>
        Secondary Button
      </Button>

      <Button customClass="danger" onClick={() => handleClick("Danger")}>
        Danger Button
      </Button>
    </div>
  );
};

export default App;
