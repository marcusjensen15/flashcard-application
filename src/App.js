import React, { Component } from 'react';
import './App.css';
import Card from './Card/Card';
import DrawButton from './DrawButton/DrawButton';
import { DB_CONFIG } from './Config/Firebase/db_config';
import firebase from 'firebase/app';
import 'firebase/database';

class App extends Component{
  constructor(props){
    super(props);
    this.app = firebase.initalizeApp(DB_CONFIG);

    this.state = {
      cards: [
        {id: 1, eng: "English", spanish: "Spanish"},
        {id: 2, eng: "English2", spanish: "Spanish2"},
        {id: 3, eng: "English3", spanish: "Spanish3"},
        {id: 4, eng: "English4", spanish: "Spanish4"},
        {id: 5, eng: "English5", spanish: "Spanish5"},
        {id: 6, eng: "English6", spanish: "Spanish6"}
      ],
      currentCard: {}
    }
  }

  componentWillMount(){
    const currentCards = this.state.cards;
    this.setState({
      cards: currentCards,
      currentCard: this.getRandomCard(currentCards)
    })
  }

  getRandomCard = (currentCards) => {
    var card = currentCards[Math.floor(Math.random() * currentCards.length)];
    return(card);

  }

  updateCard = () =>{
    const currentCards = this.state.cards;
    this.setState({
      currentCard: this.getRandomCard(currentCards)
    })
  }

  render(){
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
}

export default App;
