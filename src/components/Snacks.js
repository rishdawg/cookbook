import React, { Component } from 'react';
import '../w3.css';
import './home.css';
import popcorn from '../img/SpicyPopcornWeb.jpg';
import peanuts from '../img/spicy_peanuts.JPG';
import Singularsnack from './Singularsnack.js';



class Snacks extends Component {

  render() {
    var popcorn_ing = ["3 tbsp Sunflower Seed Oil","1 tbsp Pink Salt","1 tbsp Black Pepper", "1 tbsp chilli powder","1 tbsp tumeric","2 cups popcorn"];
    var peanuts_ing = ["2 tsp vege oil", "2 cups unsalted Peanuts","1 tbsp Pink Salt","1 tbsp Black Pepper", "1 tbsp chilli powder"];
    var popcorn_steps = ["Take a big pot and place heat on medium", "Put oil into the pot", "put popcorn seeds into pot and cover the pot", "raise heat to high","Shut off heat when seeds are done popping","Mix all spices in thoroughly"];
    var peanuts_steps = ["Heat oil on medium heat on a skillet","place in peanuts and stir for 2 mins","put in all spices and stir for 2 mins", "Let it sit on pan for 10-15 mins with no cover", "Seal in ziplock or container that does not allow air to come in"]
    return (
      <div className="w3-black marg"id="s">
            <header className="w3-container w3-black " >
                <h1 className="fnt w3-center w3-padding-large">Snacks</h1>
                <hr/>
            </header>
            <Singularsnack image={popcorn} title="PopCorn" ingredients={popcorn_ing} instructions={popcorn_steps}/>
            <Singularsnack image={peanuts} title="Peanuts" ingredients={peanuts_ing} instructions={peanuts_steps}/>
      </div>
    );
  }
}

export default Snacks;
