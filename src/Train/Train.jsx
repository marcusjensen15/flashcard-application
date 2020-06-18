import React, { Component } from 'react';
import Card from '../Card/Card';
import DrawButton from '../DrawButton/DrawButton';
import PropTypes from 'prop-types';

export default function Train(props){

  return (
    <div className="App">
      <div className="cardRow">
        <Card
          cardFront = {props.cardFront}
          cardBack = {props.cardBack}

          />
      </div>
      <div className="buttonRow">
        <DrawButton updateCard = {props.updateCard}/>
      </div>

      {console.log(props.cardDetails)}
    </div>
  );

}


Train.propTypes = {
  cardDetails: PropTypes.object,
  updateCard: PropTypes.func
};
