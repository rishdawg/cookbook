import React, { Component } from 'react';
import RishiBhai from'../img/RishiBhai.png'
import './navigation.css';

class Navigation extends Component {
  render() {
    return (
      <div className="w3-black">
      <nav className="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center w3-black w3-border-right w3-border-blue w3-left ">
        <img src={RishiBhai}/>
        <div className="w3-opacity w3-hover-opacity-off">
        <a href="#" className="w3-bar-item w3-button w3-padding-large w3-hover-blue">
          <p className="w3-large">HOME</p>
        </a>
        <a href="#s" className="w3-bar-item w3-button w3-padding-large w3-hover-blue">
          <p className="w3-large">Snacks</p>
        </a>
        <a href="#im" className="w3-bar-item w3-button w3-padding-large w3-hover-blue">
          <p className="w3-large">Indian</p>
        </a>
        <a href="#nim" className="w3-bar-item w3-button w3-padding-large w3-hover-blue">
          <p className="w3-large">Other</p>
        </a>
      </div>
      </nav>

<div className="w3-top w3-hide-large w3-hide-medium" id="myNavbar">
<div className="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
<a href="#" className="w3-bar-item w3-button">HOME</a>
<a href="#s" className="w3-bar-item w3-button topnav" >Snacks</a>
<a href="#im" className="w3-bar-item w3-button topnav" >Indian</a>
<a href="#nim" className="w3-bar-item w3-button topnav">Other</a>
</div>
</div>
      </div>
    );
  }
}

export default Navigation;
