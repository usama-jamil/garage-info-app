import React, { Component } from "react";

class SignUp extends Component {
  state = {
    Name: "",
    Email: "",
    Password: "",
    ConfirmPassword: ""
  };

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  Validate() {}
  render() {
    return (
      <fieldset>
        <legend>SignUp Now!...</legend>
        <form onSubmit={this.Validate}>
          <input
            className="name__input"
            type="text"
            name="name"
            placeholder="Name"
            onChange={this.handleChange.bind(this)}
          />
          <br />
          <input
            className="email__input"
            type="text"
            name="email"
            placeholder="Email"
            onChange={this.handleChange.bind(this)}
          />
          <br />
          <input
            className="password__input"
            type="password"
            name="email"
            placeholder="Password"
            onChange={this.handleChange.bind(this)}
          />
          <br />
          <input
            className="confirm__password__input"
            type="password"
            name="email"
            placeholder="Confirm Password"
            onChange={this.handleChange.bind(this)}
          />
          <br />
          <button className="submit__button">Sign Up!..</button>
          <br />
        </form>
      </fieldset>
    );
  }
}
export default SignUp;
