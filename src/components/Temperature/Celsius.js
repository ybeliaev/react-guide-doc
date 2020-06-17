import React from "react";

function Celsius({ CelTemperature, handleChange }) {
  return (
    <fieldset>
      <legend>Enter temperature in Celsius:</legend>
      <input
        value={CelTemperature}
        onChange={(event) => handleChange(event.target.value)}
      />
    </fieldset>
  );
}

export default Celsius;
