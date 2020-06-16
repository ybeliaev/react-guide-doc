import React from "react";

import "./App.css";
import Link from "./components/Link";
import Ticker from "./components/Ticker";
import Button from "./components/Button";
import LoginControl from "./components/Login/LoginControl";

function handleClick(event) {
  event.preventDefault();
  console.log(event, "The link was clicked.");
}

function App() {
  return (
    <div className="App">
      <Link handleClick={handleClick} />
      <header className="App-header">
        <Button />
        <LoginControl />
        <p>
          <code>Edit src/App.js and save to reload.</code>
        </p>

        <Ticker />
      </header>
    </div>
  );
}

export default App;
