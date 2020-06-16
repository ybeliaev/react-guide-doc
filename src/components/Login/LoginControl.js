import React, { Component } from "react";

import Greeting from "./Greeting";

class LoginControl extends Component {
  constructor(props) {
    super(props);
    // this.handleLoginClick = this.handleLoginClick.bind(this);
    // this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <LogOutButton onClick={() => this.handleLogoutClick()} />;
    } else {
      button = <LogInButton onClick={() => this.handleLoginClick()} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

function LogInButton(props) {
  return <button onClick={props.onClick}>Login</button>;
}

function LogOutButton(props) {
  return <button onClick={props.onClick}>Logout</button>;
}

export default LoginControl;
