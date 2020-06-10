import React from "react";

import "./App.css";
import Element from "./components/element";
import Ticker from "./components/Ticker";

function App() {
  return (
    <div className="App">
      <Element handleClick={() => console.log(Element.props)} />
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
