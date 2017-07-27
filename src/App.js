import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './w3.css';
import Navigation from './components/Navigation.js'
import Home from './components/Home.js'
import Snacks from './components/Snacks.js'
import Modalcreate from './components/modal.js'
import Indian from './components/indian_food.js'
import NonIndian from './components/non_indian.js'
class App extends Component {
  render() {
    return (
      <div className="w3-black">
        <Navigation />
        <Home />
        <Snacks/>
        <Indian/>
        <NonIndian/>
      </div>
    );
  }
}

export default App;
