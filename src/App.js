//React reqs
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Axios from 'axios';

//components

import Card from './components/Card/Card';
import DrawButton from './components/DrawButton/DrawButton';
import AddCard from './components/AddCard/AddCard';
import Train from './components/Train/Train';
import Home from './components/Home/Home';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';

const axios = require('axios');


class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      cards: [],
      currentCard: {},
      isLoggedIn: true
    }
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

//set 'cards' state inside of componentWillMount

  componentWillMount = async () => {
    let callCards = await axios.get('http://localhost:4000/cards').then(resp => {
       return resp.data;
    })
    await this.setState({cards: callCards,
    currentCard: this.getRandomCard(callCards)});
    await console.log(this.state);
  }


addNewCard = (newCard) => {
  axios.post('http://localhost:4000/cards', {
    cardFront: newCard.cardFront,
    cardBack: newCard.cardBack,
    cardDeck: newCard.cardDeck,
    user: newCard.user
  })
  .then(function (response) {
  })
  .then(window.location.reload())
}

updateCard = () => {
  let callCards = this.state.cards;
  this.setState({
    cards: callCards,
    currentCard: this.getRandomCard(callCards)
  })
}





  render(){
  return (
    <>
      <Switch>
        <Route exact path='/' component={Home}/>
          <Route
            exact path='/train'
            render={() => <Train
              cardDetails={this.state.currentCard}
              updateCard={this.updateCard}
              isLoggedIn={this.state.isLoggedIn}/>
        }/>
          <Route
            exact path='/addCard'
            render={()=> <AddCard
              addNewCard = {this.addNewCard}
              isLoggedIn={this.state.isLoggedIn}/>
        }/>
          <Route
            exact path='/signup'
            render={()=> <Signup
              isLoggedIn={this.state.isLoggedIn}/>
        }/>
          <Route
            exact path='/login'
            render={()=> <Login
              isLoggedIn={this.state.isLoggedIn}/>
        }/>
      </Switch>
    </>

  );
 }
}

export default App;
