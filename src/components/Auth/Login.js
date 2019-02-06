import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();
    this.Validate = this.Validate.bind(this);
  }
  state = {
    email: "",
    password: "",
    isLogin: false
  };

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  Validate() {
    const fakeEmail = "usamajamil006@gmail.com";
    const fakePassword = "asd";

    const { email, password } = this.state;
    //if  email password not found
    if (!(fakeEmail === email && fakePassword === password)) return;

    this.setState({ isLogin: true });
  }
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
            name="email"
            placeholder="Email"
            value={this.state.Email}
            onChange={this.handleChange.bind(this)}
          />
          <br />
          <input
            className="password__input"
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.Password}
            onChange={this.handleChange.bind(this)}
          />
          <br />
          <button className="submit__button">Log In</button>
          <br />
          <button className="submit__button">
            <Link className="submit__button" to="/signup">
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
