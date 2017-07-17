import React, { Component } from 'react';
import '../w3.css';
import './home.css';
import ChefRish from'../img/Chef_Rish.jpg'
class Home extends Component {
  render() {
    return (
      <div className="w3-black">
            <header className="w3-container w3-black marg" id="home">
                <h1 className="fnt w3-center w3-padding-large">Rishi&#39;s Kitchen </h1>
                <img src={ChefRish} alt="Chefrish" className="w3-image"/>
            </header>

      </div>
    );
  }
}

export default Home;
