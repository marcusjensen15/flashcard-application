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


class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      cards: [],
      currentCard: {}
    }
  }

//set 'cards' state inside of componentWillMount

  componentWillMount = async () => {
    let callCards = await axios.get('http://localhost:4000/cards').then(resp => {
       return resp.data;
    })
    await this.setState({cards: callCards,
    currentCard: getRandomCard(currentCards)});
    // console.log(this.state.cards);
  }


//picking initial random card

  getRandomCard = (currentCards) => {
    let randomCardIndex = Math.floor(Math.random() * currentCards.length);
    let card = currentCards[randomCardIndex];
    if (card === this.state.currentCard){
      this.getRandomCard(currentCards);
    }
      return(card);
  }

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

updateCard(){
  const currentCards = this.state.cards;
  this.setState({
    cards: currentCards,
    currentCard: this.getRandomCard(currentCards)
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
