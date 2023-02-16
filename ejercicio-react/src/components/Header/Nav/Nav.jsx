import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return <nav>
      <Link to="/">Home</Link>
      <Link to="/infolist">To do</Link>
      <Link to="/weather">Weather</Link>
    </nav>;
  }
}

export default Nav;