import React, { Component } from 'react';
import Card from '../Card/Card';
import DrawButton from '../DrawButton/DrawButton';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import '../scss/_train.scss';


export default function Train(props){

  return (
    <div className="App">
      <Header isLoggedIn={props.isLoggedIn}/>
      <h2 className="trainTitle">Train</h2>
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
