import React from "react";
import BeeFriendlylogo from "../../assets/Images/logo.jpeg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./logo.css";

function logo() {
  return (
    <div className="logo">
      <img src={BeeFriendlylogo} alt="Home" />
    </div>
  );
}

export default logo;
