import React from "react";
import { Link } from "react-router-dom";

const SginInHeader = () => {
  return (
    <div className="login__button">
      <Link className="login__link" to={{ pathname: "/login" }}>
        Log Out
      </Link>
      <div>
        <button className="" style={notificationButton}>
          Notify
        </button>
        <button className="" style={notificationButton}>
          US
        </button>
      </div>
    </div>
  );
};

const notificationButton = {
  border: " solid 2px #3c86e7",
  background: "transparent",
  padding: "0.2rem 0.9rem",
  margin: "0 0.2rem",
  borderRadius: "1px",
  fontSize: "1rem",
  textTransform: "uppercase",
  fontWeight: "500",
  marginLeft: "0.7rem",
  color: "#fff"
};

export default SginInHeader;
