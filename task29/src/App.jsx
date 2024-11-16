import React from 'react';
import UserCard from './UserCard';

const App = () => {
  return (
    <div>
      <h1>User Cards</h1>

      {/* Correct usage with valid props */}
      <UserCard name="John Doe" email="john.doe@example.com" age={30} />

      {/* Incorrect usage (age is missing) */}
      {/* <UserCard name="Jane Smith" email="jane.smith@example.com" /> */}

      {/* Incorrect usage (email is not a string) */}
      {/* <UserCard name="Chris Evans" email={123} age={40} /> */}
    </div>
  );
};

export default App;
