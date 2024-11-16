import React, { useState } from "react";
import "./Counter.css"; 
const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="counter">
      <h1>Counter</h1>
      <p className="count-value">Current Count: {count}</p>
      <div className="button-container">
        <button onClick={increment} className="btn increment-btn">Increment</button>
        <button onClick={decrement} className="btn decrement-btn">Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
