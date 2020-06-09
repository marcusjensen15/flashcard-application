import React from 'react';
import './AddCard.css'



export default function AddCard(){



return(
<div className="AddCardContainer">
  <div className="inputContainer">
    <textarea className="cardFront" type="text" placeholder="Card Front"/>
    <textarea className="cardBack" type="text" placeholder="Card Back"/>
    <input className="deckName" type="text" placeholder="Deck Name"/>
  </div>
</div>
)
}
