//React reqs
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Axios from 'axios';

//components

import Card from './Card/Card';
import DrawButton from './DrawButton/DrawButton';
import AddCard from './AddCard/AddCard';
import Train from './Train/Train';
import Home from './Home/Home';

const axios = require('axios');

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


  componentWillMount(){
    axios.get('http://localhost:4000/cards').then(resp => {
      console.log(resp.data)
    })
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

//(need to wait until new computer to do api stuff. running back and front end at the same time freezes computer). needs to be http, not https
  // addNewCard(newCard){
  //    fetch('http://localhost:4000/cards', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded'
  //     },
  //     body: JSON.stringify({
  //       cardFront: newCard.cardFront,
  //       cardBack: newCard.cardBack,
  //       deckName: newCard.title,
  //       user: null
  //     })
  //   })
  // };

// addNewCard = async (newCard) => {
//   await fetch("http://localhost:4000/cards", {
//
//     // Adding method type
//     method: "POST",
//
//     // Adding headers to the request
//
//     headers: {
//         "content-type": "application/x-www-form-urlencoded",
//         "accept": "application/x-www-form-urlencoded"
//
//     },
//
//     // Adding body or contents to send
//     body: JSON.stringify({
//       cardFront: newCard.cardFront,
//       cardBack: newCard.cardBack,
//       deckName: newCard.deckName
//     })
//
//
//
// })
//
// // Converting to JSON
// .then(response => response.json())
//
// // Displaying results to console
// .then(json => console.log(json));
//
//
// }





//get request is throwing the same network/failed to fetch error
// componentDidMount(){
//   fetch("http://localhost:4000/cards")
//   .then(d => d.json())
//   .then(d => {
//     this.setState({
//       cards: d
//     })
//   })
//   console.log(this.state.cards);
// }


addNewCard = (newCard) => {
  axios.post('http://localhost:4000/cards', {
    cardFront: newCard.cardFront,
    cardBack: newCard.cardBack,
    cardDeck: newCard.cardDeck,
    user: newCard.user
  })
  .then(function (response) {
    console.log(response);
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
