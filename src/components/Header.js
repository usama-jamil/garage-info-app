import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="App-header">
    <h1 className="App-title"> Recipe Search</h1>
    <button className="login__button">
      <Link to={{ pathname: "/login" }}> Log In</Link>
    </button>
  </header>
);
export default Header;
