import React from 'react';
import './App.css';  


function App() {
  const imageUrl = "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?cs=srgb&dl=pexels-soldiervip-1308881.jpg&fm=jpg";  
  const altText = "No image";               

  return (
    <div className="App">
      <div id="my-image-container" className="styled-div">
        <h1>Welcome to React!</h1>
        <p>This is a div with an image element added to it.</p>

        
        <img 
          src={imageUrl} 
          alt={altText} 
          className="image" 
          style={{ borderRadius: '8px', width: '100%', maxWidth: '400px' }}  
        />
      </div>
    </div>
  );
}

export default App;  
