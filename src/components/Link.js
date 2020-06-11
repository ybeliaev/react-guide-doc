import React from "react";

const Link = ({ handleClick }) => {
  return (
    <div className="something">
      <a href="!#" onClick={(event) => handleClick(event)}>
        ClickMe
      </a>
    </div>
  );
};
export default Link;
