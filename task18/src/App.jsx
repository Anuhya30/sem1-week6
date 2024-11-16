import React, { Component } from "react";
import "./App.css";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { message: "Hello" };
  }

  componentDidMount() {
    console.log("Component mounted!");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.message !== this.state.message) {
      console.log("Message updated!");
    }
  }

  componentWillUnmount() {
    console.log("Component will unmount!");
  }

  toggleMessage = () => {
    this.setState((prevState) => ({
      message: prevState.message === "Hello" ? "Goodbye" : "Hello",
    }));
  };

  render() {
    return (
      <div className="app-container">
        <h1>{this.state.message}, welcome to my React app!</h1>
        <button onClick={this.toggleMessage}>Toggle Message</button>
      </div>
    );
  }
}

export default App;
