import React, { Component } from 'react';
import './Card.css';


const Card = (props) => (
  <div className = "card-container">
    <div className = "card">
      <div className="front">
        <div className="eng"> {props.cardFront} </div>
      </div>
      <div className="back">
        <div className="spanish"> {props.cardBack} </div>
      </div>
    </div>
  </div>
)

export default Card;
