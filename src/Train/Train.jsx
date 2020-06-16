import React, { Component } from 'react';
import './App.css';
import Card from '../Card/Card';
import DrawButton from '../DrawButton/DrawButton';
import firebase from 'firebase/app';
import 'firebase/database';

export default function Train(props){

  return (
    <div className="App">
      <div className="cardRow">
        <Card eng= {this.state.currentCard.eng}
              spanish= {this.state.currentCard.spanish}
          />
      </div>
      <div className="buttonRow">
        <DrawButton drawCard = {this.updateCard}/>
      </div>
    </div>
  );

}

export default Train;
