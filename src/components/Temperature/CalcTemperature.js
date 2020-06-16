import React from "react";
import Celsius from "./Celsius";
import Fahrenheit from "./Fahrenheit";

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    // this.handleChange = this.handleChange.bind(this);
    this.state = {
      temperature: "",
      scale: "Celsius",
    };
  }

  render() {
    return (
      <div>
        <Celsius />
        <Fahrenheit />
      </div>
    );
  }
}

export default TemperatureInput;
