import React from "react";

import "./App.css";
import Link from "./components/Link";
import Ticker from "./components/Ticker";

function handleClick(event) {
  event.preventDefault();
  console.log(event, "The link was clicked.");
}

function App() {
  return (
    <div className="App">
      <Link handleClick={handleClick} />
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <Ticker />
      </header>
    </div>
  );
}

export default App;
