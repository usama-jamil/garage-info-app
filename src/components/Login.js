import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    Email: "",
    Password: ""
  };

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  Validate() {}
  render() {
    return (
      <fieldset>
        <legend>Login Form</legend>
        <form
          onSubmit={this.Validate}
          style={{ marginBottom: "2rem", textAlign: "center" }}
        >
          <input
            className="email__input"
            type="text"
            name="Email"
            placeholder="Email"
            value={this.state.Email}
            onChange={this.handleChange.bind(this)}
          />
          <br />
          <input
            className="password__input"
            type="password"
            name="Password"
            placeholder="Password"
            value={this.state.Password}
            onChange={this.handleChange.bind(this)}
          />
          <br />
          <button className="submit__button">Log In</button>
          <br />
          <button className="submit__button">
            <Link className="submit__button" to={{ pathname: "/signup" }}>
              {" "}
              Sign Up
            </Link>
          </button>
          <br />
        </form>
      </fieldset>
    );
  }
}
export default Login;
