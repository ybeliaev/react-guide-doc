import React from "react";

const Element = ({ handleClick }) => {
  return (
    <div className="something">
      <button onClick={() => handleClick()}>Element</button>
    </div>
  );
};
export default Element;
