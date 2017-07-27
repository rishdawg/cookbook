import React, { Component } from 'react';
import '../w3.css';
import './home.css';
import burger from '../img/lamb_burger.jpg';
import Basil_Rice from '../img/Thai_basil.JPG';
import Singularsnack from './Singularsnack.js';



class NonIndian extends Component {

  render() {
    var lamb_ing = ["1.33 lbs ground lamb","1 tbsp Pink Salt","2 tbsp Black paprika", "2 small cut onions","3 minced garlic pieces","1.5 cups of argula","3 tbsp of olive oil","1.33 cups of feta"];
    var Basil_ing = ["2 cups basil", "1 bell pepper diced","1 onion diced","4 cups jasmine rice", "8 ounces chicken","3 thai red chillies","7 garlic cloves","1 tbsp soy sauce","2 tbsp fish and oyster sauce","2 tbsp vege oil"];
    var lamb_steps = ["mix all ingredients together", "Put in the frige and let it sit for 3 hrs", "Make into Patties", "Grill"];
    var Basil_steps = ["Crush thai chilli and garlic together","whisk the 3 sauces together","place oil in wok and put on medium heat","after wok is warm place chilli garlic crush mixture","after 10 seconds or so place onions and bell peper","once onion is turned pinkish place chicken","once chicken is cooked place the whicked sauce","place basil in","put in rice","bring to high heat and mix thoroughly"]
    return (
      <div className="w3-black marg">
            <header className="w3-container w3-black " >
                <h1 className="fnt w3-center w3-padding-large">Other</h1>
                <hr id="nim"/>
            </header>
            <Singularsnack image={burger} title="Lamb Burger" ingredients={lamb_ing} instructions={lamb_steps}/>
            <Singularsnack image={Basil_Rice} title="Basil Rice" ingredients={Basil_ing} instructions={Basil_steps}/>
      </div>
    );
  }
}

export default NonIndian;
