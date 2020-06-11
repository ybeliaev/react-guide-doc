import React, { Component } from "react";

class Ticker extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    console.log("componentDidMount()");
    this.timerID = setInterval(() => {
      return this.tick();
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    console.log("render()");
    return (
      <div>
        <h1>Привет, пиплы!!</h1>
        <h2>Сейчас {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
export default Ticker;
