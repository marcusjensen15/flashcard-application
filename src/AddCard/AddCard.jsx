import React from 'react';
import './AddCard.css'



export default function AddCard(){



return(
<div className="AddCardContainer">
  <form>
    <div className="addCardTitle">Add a Card</div>
    <div className="inputContainer">
      <textarea className="cardFront" type="text" placeholder="Card Front"/>
      <textarea className="cardBack" type="text" placeholder="Card Back"/>
      <input className="deckName" type="text" placeholder="Deck Name"/>
      <div  className="submitButtonStyle">  <button className="buttonSize" type='submit'>Add Card</button> </div>

    </div>
  </form>
</div>
)
}
