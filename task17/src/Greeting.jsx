import React, { useState } from 'react';
import './Greeting.css'
const Greeting = () => {
  const [message, setMessage] = useState('Hello');

  const toggleMessage = () => {
    setMessage((prevMessage) => (prevMessage === 'Hello' ? 'Goodbye' : 'Hello'));
  };

  return (
    <div>
      <h1>{message}, welcome to my React app!</h1>
      <button onClick={toggleMessage}>Toggle Message</button>
    </div>
  );
};

export default Greeting;
