import React from 'react';
import './AddCard.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';




export default function AddCard(props){

  let _cardFront = null;
  let _cardBack= null;
  let _deckName = null;


function addNewCardHandler(event) {
  event.preventDefault();
  props.addNewCard({cardFront: _cardFront.value, cardBack: _cardBack.value, deckName: _deckName.value, user:null});

  _cardFront.value = " ";
  _cardBack.value = " ";
  _deckName.value = " ";

  }



return(
<div className="AddCardContainer">
  <Link to='/train'> Train </Link>
  <Link to='/'> Home </Link>
  <form className="formContainer" onSubmit={addNewCardHandler}>
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

AddCard.propTypes = {
  addNewCard: PropTypes.func
};
