import React, { Component } from "react";
import './sidebar.css';

class Sidebar extends Component {
  render() {
    return <div id="Sidebar">{this.props.children}</div>;
  }
}

export default Sidebar;
