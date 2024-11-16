import React from "react";
import Child from "./Child";

const Parent = ({ message }) => {
  return (
    <div>
      <h1>Parent Component</h1>
      {/* Pass the props down to the Child component */}
      <Child message={message} />
    </div>
  );
};

export default Parent;
