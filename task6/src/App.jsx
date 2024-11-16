import React from 'react';
import './App.css';  
function App() {
  const inlineStyle = {
    backgroundColor: 'lightgreen',  
    padding: '20px',                
    borderRadius: '10px',           
    textAlign: 'center',            
  };

  return (
    <div className="App">
    
      <div id="my-special-div" className="styled-div" style={inlineStyle}>
        <h1>Hello, this div has styles!</h1>
        <p>This div is styled using className, id, and inline styles in React.</p>
      </div>
    </div>
  );
}

export default App;  
