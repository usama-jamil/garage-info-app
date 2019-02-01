import React, { Component } from "react";

class Login extends Component {
  state = {
    Email: "",
    Password: ""
  };
  Validate() {}
  render() {
    return (
      <fieldset>
        <legend>Login Form</legend>
        <form
          onSubmit={this.Validate}
          style={{ marginBottom: "2rem", textAlign: "center" }}
        >
          <input className="email__input" type="text" name="email" />
          <br />
          <input className="password__input" type="password" name="password" />
          <br />
          <button className="submit__button">Log In</button>
          <br />
        </form>
      </fieldset>
    );
  }
}
export default Login;
