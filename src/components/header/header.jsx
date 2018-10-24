import React, { Component } from "react";
import "./header.css";

class Header extends Component {
  render() {
    return (
      <div id="Header">
        <h1>{this.props.data.title}</h1>
      </div>
    );
  }
}

export default Header;
