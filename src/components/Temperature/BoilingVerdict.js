import React from "react";

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <h4>Water is boiling!</h4>;
  }
  return <h4>Not boiling yet..</h4>;
}

export default BoilingVerdict;
