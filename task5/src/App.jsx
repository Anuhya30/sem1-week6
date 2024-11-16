import React from 'react';
import './App.css';  // Import the component-specific styles

// Define the App component
function App() {
  const name = "React";  // Declare the variable `name`

  return (
    <div className="App">
      <h1>Hello, {name}!</h1>  {/* Use the `name` variable within JSX */}
    </div>
  );
}

export default App;  // Export the App component to be used in main.jsx
