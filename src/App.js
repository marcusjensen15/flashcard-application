import React, { Component } from 'react';
import './App.css';
import Card from './Card/Card';
import DrawButton from './DrawButton/DrawButton';

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      cards: [
        {id: 1, eng: "English", spanish: "Spanish"},
        {id: 2, eng: "English2", spanish: "Spanish2"}
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
    console.log('a new card')
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
