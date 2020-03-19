import React, { Component } from "react";
import { getDefaultNormalizer } from "@testing-library/react";

class Clock extends Component {
  state = { date: new Date() };
  timerId = 0;

  constructor() {
    super();
  }

  updateTime = () => {
    this.setState({
      date: new Date()
    });
    console.log("update time " + new Date());
  };

  componentDidMount() {
    console.log("component did mount");
    this.timerId = setInterval(this.updateTime, 1000);
  }

  componentWillUnmount() {
    console.log("help someone is tring to remove this component");
    clearInterval(this.timerId);
  }

  getTime = () => {
    let date = this.state.date;
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  };

  render() {
    return <h3>{this.getTime()}</h3>;
  }
}

export default Clock;
