import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../img/logo.svg";
import "../App.css";

class Nav extends Component {
  render() {
    return (
      <nav className="navbar">
        <a className="logo" href="https://www.majdtarbin.com">
          <Logo className="svg" />
        </a>

        <div className="links">
          <Link className="link" to="/builder">
            Builder
          </Link>
          <Link className="link" to="/teams">
            Teams
          </Link>
          <Link className="link" to="/champions">
            Champions
          </Link>
        </div>
        <a className="kofi" href="https://ko-fi.com/Z8Z01WU4W">
          <img
            height="36"
            src="https://cdn.ko-fi.com/cdn/kofi3.png?v=2"
            border="0"
            alt="Buy Me a Coffee at ko-fi.com"
          />
        </a>
      </nav>
    );
  }
}

export default Nav;
