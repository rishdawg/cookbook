import React, { Component } from 'react';
import '../w3.css';
import './home.css';
class Home extends Component {
  render() {
    return (
      <div className="w3-black">
            <header className="w3-container w3-black marg" id="home">
                <h1 className="fnt w3-center w3-padding-large">Rishi&#39;s Kitchen </h1>
                <img src="https://s3.us-east-2.amazonaws.com/cookbookpic/Chef_Rish.jpg" alt="Chefrish" className="w3-image"/>
            </header>

      </div>
    );
  }
}

export default Home;
