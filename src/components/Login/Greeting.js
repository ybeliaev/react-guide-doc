import React from "react";

import User from "./User";
import Noname from "./Noname";

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <User />;
  }
  return <Noname />;
}

export default Greeting;
