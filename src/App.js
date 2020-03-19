import React, { Component } from "react";

import "./App.css";
import Clock from "./components/clock";

class App extends Component {
  state = { displayTime: true };

  handleClockToggle = () => {
    const newState = { displayTime: !this.state.displayTime };
    this.setState(newState);
  };

  render() {
    return (
      <div>
        <h1>Local Time</h1>
        {this.state.displayTime ? <Clock /> : "No time like the present"}
        <button onClick={this.handleClockToggle}>Toggle</button>
      </div>
    );
  }
}

export default App;
