import React, { Component } from 'react';
import Card from '../Card/Card';
import DrawButton from '../DrawButton/DrawButton';
import { Link } from 'react-router-dom';


export default function Train(props){

  return (
    <div className="App">
      <Link className="linkText" to='/train'> Train </Link>
      <Link className="linkText" to='/'> Home </Link>
      <Link className="linkText" to='/addCard'> Add Cards </Link>
      <div className="cardRow">
        <Card
          cardDetails = {props.cardDetails}

          />
      </div>
      <div className="buttonRow">
        <DrawButton updateCard = {props.updateCard}/>
      </div>
    </div>
  );

}
