//React reqs
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

//components

import Card from './Card/Card';
import DrawButton from './DrawButton/DrawButton';
import AddCard from './AddCard/AddCard';
import Train from './Train/Train';
import Home from './Home/Home';


//api connection
// import firebase from 'firebase/app';
// import 'firebase/database';



class App extends Component{
  constructor(props){
    super(props);

    // this.database = firebase.database().ref().child('cards');

    this.state = {
      cards: [],
      currentCard: {}
    }
  }

  // componentWillMount(){
  //   const currentCards = this.state.cards;
  //
  //   this.database.on('child_added', snap => {
  //     currentCards.push({
  //       id: snap.key,
  //       eng: snap.val().eng,
  //       spanish: snap.val().spanish
  //     })
  //     this.setState({
  //       cards: currentCards,
  //       currentCard: this.getRandomCard(currentCards)
  //     })
  //   })
  // }
  //
  // getRandomCard = (currentCards) => {
  //   var card = currentCards[Math.floor(Math.random() * currentCards.length)];
  //   return(card);
  //
  // }
  //
  // updateCard = () => {
  //   const currentCards = this.state.cards;
  //   this.setState({
  //     currentCard: this.getRandomCard(currentCards)
  //   })
  // }

//(need to wait until new computer to do api stuff. running back and front end at the same time freezes computer)
  addNewCard(newCard){
    fetch('http://localhost:4000/cards', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cardFront: newCard.cardFront,
        cardBack: newCard.cardBack,
        deckName: newCard.title
      })
    })
  }



  render(){
  return (
    <>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/train' component={Train}/>
        <Route
          exact path='/addCard'
          render={()=> <AddCard
          addNewCard = {this.addNewCard}>
          </AddCard>}
          />
      </Switch>
    </>

  );
 }
}

export default App;
