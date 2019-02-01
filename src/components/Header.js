import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="App-header">
    <h1 className="App-title"> Recipe Search</h1>
    
      <div className="login__button" >
        <Link className="login__link" to={{ pathname: "/login" }}> Log In</Link>
      </div>
  </header>
);
export default Header;
