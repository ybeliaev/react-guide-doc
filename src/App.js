import React from "react";

import "./App.css";
import Link from "./components/Link";
import Ticker from "./components/Ticker";
import Button from "./components/Button";
import User from "./components/User";
import Noname from "./components/Noname";

function handleClick(event) {
  event.preventDefault();
  console.log(event, "The link was clicked.");
}
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <User />;
  }
  return <Noname />;
}
function App() {
  return (
    <div className="App">
      <Link handleClick={handleClick} />
      <header className="App-header">
        <Button />
        <Greeting isLoggedIn={true} />
        <p>
          <code>Edit src/App.js and save to reload.</code>
        </p>

        <Ticker />
      </header>
    </div>
  );
}

export default App;
