import React from 'react';
import './AddCard.css'



export default function AddCard(props){

  let _cardFront = null;
  let _cardBack= null;
  let _deckName = null;


  function addNewCard(event) {
    event.preventDefault();
    console.log('form was submitted');
  }



return(
<div className="AddCardContainer">
  <form className="formContainer" onSubmit={addNewCard}>
    <div className="addCardTitle">Add a Card</div>
    <div className="inputContainer">
      <textarea className="cardFront"
        type="text"
        placeholder="Card Front"
        ref={(input) => {_cardFront = input;}}/>


      <textarea className="cardBack"
        type="text"
        placeholder="Card Back"
        ref={(input) => {_cardBack = input;}}/>


      <input className="deckName"
        type="text"
        placeholder="Deck Name"
        ref={(input) => {_deckName = input;}}/>


      <div  className="submitButtonStyle">  <button className="buttonSize" type='submit'>Add Card</button> </div>

    </div>
  </form>
</div>
)
}
