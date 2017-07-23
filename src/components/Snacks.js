import React, { Component } from 'react';
import '../w3.css';
import './home.css';
import popcorn from '../img/SpicyPopcornWeb.jpg';
import peanuts from '../img/spicy_peanuts.JPG';
import Singularsnack from './Singularsnack.js';

class Snacks extends Component {
  render() {
    return (
      <div className="w3-black marg"id="s">
            <header className="w3-container w3-black " >
                <h1 className="fnt w3-center w3-padding-large">Snacks</h1>
                <hr/>
            </header>
            <Singularsnack image={popcorn} title="PopCorn"/>
            <Singularsnack image={peanuts} title="Peanuts"/>
      </div>
    );
  }
}

export default Snacks;
