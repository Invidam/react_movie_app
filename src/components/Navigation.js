import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
function Navigation() {
  return (
    <div className="nav">
      <div className="nav-links">
        <Link className="nav-home nav-btn" to="/">
          Home
        </Link>
        <Link className="nav-about nav-btn" to="/about">
          About
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
