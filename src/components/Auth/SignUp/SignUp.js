import React, { Component } from "react";
import { Link } from "react-router-dom";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.Validate = this.Validate.bind(this);
  }

  state = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    localUsers: []
  };

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  Validate(e) {
    const { name, email, password } = this.state;
    // if (newUser.Password === newUser.ConfirmPassword) {
    //   alert("your password not same");
    //   return;
    // }
    const user = { name, email, password }
    console.log(user);
    this.setState(prevState => {
      return {
        localUsers: prevState.localUsers.push(user)
      };
    })
    
    console.log(this.state.localUsers);
    console.log(JSON.stringify(this.state.localUsers));
    // localStorage.setItem("localUsers", JSON.stringify(this.state.localUsers));
    // console.log(localStorage.getItem("localUsers"));
    e.preventDefault();

    // <Link to="/login">Sign Up!..</Link>
  }

  componentDidMount() {
    const localUsers = JSON.parse(localStorage.getItem("localUsers"));
    if (localUsers) {
      this.setState({ localUsers });
    }
  }
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
            onChange={this.handleChange}
          />
          <br />
          <input
            className="email__input"
            type="text"
            name="email"
            placeholder="Email"
            onChange={this.handleChange}
          />
          <br />
          <input
            className="password__input"
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.handleChange}
          />
          <br />
          <input
            className="confirm__password__input"
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={this.handleChange}
          />
          <br />
          <button className="submit__button" />
          <br />
        </form>
      </fieldset>
    );
  }
}
export default SignUp;
