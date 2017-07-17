import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './w3.css';
import Navigation from './components/Navigation.js'
import Home from './components/Home.js'
import Snacks from './components/Snacks.js'

class App extends Component {
  render() {
    return (
      <div className="w3-black">
        <Navigation />
        <Home />
        <Snacks/>
      </div>
    );
  }
}

export default App;
