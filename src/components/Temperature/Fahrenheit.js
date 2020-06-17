import React from "react";

function Fahrenheit({ FarTemperature, handleChange }) {
  return (
    <fieldset>
      <legend>Enter temperature in Fahrenheit:</legend>
      <input
        value={FarTemperature}
        onChange={(event) => handleChange(event.target.value)}
      />
    </fieldset>
  );
}

export default Fahrenheit;
