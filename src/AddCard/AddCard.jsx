import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../scss/_addCard.scss'




export default function AddCard(props){

  let _cardFront = null;
  let _cardBack= null;
  let _cardDeck = null;


function addNewCardHandler(event) {
  event.preventDefault();
  props.addNewCard({cardFront: _cardFront.value, cardBack: _cardBack.value, cardDeck: _cardDeck.value, user:null});

  _cardFront.value = " ";
  _cardBack.value = " ";
  _cardDeck.value = " ";

  }



return(
<div className="addCardContainer">
  <div className="headerContainer">
    <Link className="linkText" to='/train'> Train </Link>
    <Link className="linkText" to='/'> Home </Link>
  </div>
  <form className="addCardformContainer" onSubmit={addNewCardHandler}>
    <h2 className="addCardTitle">Add a Card</h2>

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
        ref={(input) => {_cardDeck = input;}}/>


      <div  className="submitButtonStyle">  <button className="buttonSize" type='submit'>Add Card</button> </div>

  
  </form>
</div>
)
}

AddCard.propTypes = {
  addNewCard: PropTypes.func
};
