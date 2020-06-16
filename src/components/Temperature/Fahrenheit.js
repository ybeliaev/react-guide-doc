import React from "react";

function Fahrenheit({ FarTemperature, handleChange }) {
  return (
    <fieldset>
      <legend>Enter temperature in Fahrenheit:</legend>
      <input value={FarTemperature} onChange={handleChange} />
    </fieldset>
  );
}

export default Fahrenheit;
