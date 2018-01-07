import React, { Component } from 'react';
import '../w3.css';
import './home.css';
import Singularsnack from './Singularsnack.js';

const lamb_ing = ["1.33 lbs ground lamb","1 tbsp Pink Salt","2 tbsp Black paprika", "2 small cut onions","3 minced garlic pieces","1.5 cups of argula","3 tbsp of olive oil","1.33 cups of feta"];
const Basil_ing = ["2 cups basil", "1 bell pepper diced","1 onion diced","4 cups jasmine rice", "8 ounces chicken","3 thai red chillies","7 garlic cloves","1 tbsp soy sauce","2 tbsp fish and oyster sauce","2 tbsp vege oil"];
const lamb_steps = ["mix all ingredients together", "Put in the frige and let it sit for 3 hrs", "Make into Patties", "Grill"];
const Basil_steps = ["Crush thai chilli and garlic together","whisk the 3 sauces together","place oil in wok and put on medium heat","after wok is warm place chilli garlic crush mixture","after 10 seconds or so place onions and bell peper","once onion is turned pinkish place chicken","once chicken is cooked place the whicked sauce","place basil in","put in rice","bring to high heat and mix thoroughly"]

const all_non_indian = [
  {
    image: "https://s3.us-east-2.amazonaws.com/cookbookpic/lamb_burger.jpg",
    title: 'Lamb Burger',
    ingredients: lamb_ing,
    instructions: lamb_steps
  },
  {
    image: "https://s3.us-east-2.amazonaws.com/cookbookpic/Thai_basil.JPG",
    title: 'Basil Rice',
    ingredients: Basil_ing,
    instructions: Basil_steps
  }
];

const NonIndianlist = ({all_non_indian}) => (
  <div>
  {all_non_indian.map(NonIndian => (
    <Singularsnack image={NonIndian.image} title={NonIndian.title} ingredients={NonIndian.ingredients} instructions={NonIndian.instructions}/>
  ))}
  </div>
);

class NonIndian extends Component {

  render() {
    return (
      <div className="w3-black marg">
            <header className="w3-container w3-black " >
                <h1 className="fnt w3-center w3-padding-large">Other</h1>
                <hr id="nim"/>
            </header>
            <NonIndianlist all_non_indian={all_non_indian}/>
      </div>
    );
  }
}

export default NonIndian;
