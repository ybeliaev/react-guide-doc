import React from "react";

import "./App.css";
import Link from "./components/Link";
import Ticker from "./components/Ticker";
import Button from "./components/Button";
import LoginControl from "./components/Login/LoginControl";
import NameForm from "./components/Form/NameForm";
import TemperatureInput from "./components/Temperature/CalcTemperature";

function handleClick(event) {
  event.preventDefault();
  console.log(event, "The link was clicked.");
}

function App() {
  return (
    <div className="App">
      <Link handleClick={handleClick} />
      <NameForm />
      <header className="App-header">
        <Button />
        <LoginControl />

        <TemperatureInput />
        <Ticker />
      </header>
    </div>
  );
}

export default App;
