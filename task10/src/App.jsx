import React from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <h1>Welcome to My App</h1>
        <p>This is the main content area.</p>
      </div>
      <Footer />
    </div>
  );
}

export default App;
