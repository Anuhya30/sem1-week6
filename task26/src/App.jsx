import React from "react";
import Parent from "./Parent";

const App = () => {
  const message = "Hello from App Component!";

  return (
    <div>
      <h1>App Component</h1>
      {/* Pass the message prop to the Parent component */}
      <Parent message={message} />
    </div>
  );
};

export default App;
