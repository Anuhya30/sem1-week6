import React from "react";
import Notification from "./Notification";

const App = () => {
  return (
    <div>
      <h1>Notification Example</h1>

      <Notification message="Operation was successful!" type="success" />

      <Notification message="Something went wrong!" type="error" />

      <Notification message="This is an informational message." type="info" />
    </div>
  );
};

export default App;
