import React from "react";
import { Link } from "react-router-dom";

const SginOutHeader = () => {
  return (
    <div className="login__button">
      <Link className="login__link" style={{backgroundColor:'#E81224'}} to={{ pathname: "/login" }}>
        Log In
      </Link>
      <Link className="login__link"style={{backgroundColor:'#EF6950'}} to={{ pathname: "/signup" }}>
        Sign up
      </Link>
    </div>
  );
};

export default SginOutHeader;
