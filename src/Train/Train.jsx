import React, { Component } from 'react';
import Card from '../Card/Card';
import DrawButton from '../DrawButton/DrawButton';


export default function Train(props){

  return (
    <div className="App">
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
