import React from "react";
import { Link } from "react-router-dom";
import SginInHeader from "../SginInHeader";
import SginOutHeader from "../SginOutHeader";

const Header = () => (
  <header className="App-header">
    <h1 className="App-title">
      <Link to="/" className="App-title">
        Garage Search
      </Link>
    </h1>
    <SginOutHeader />
    {/* <SginInHeader /> */}
  </header>
);
export default Header;
