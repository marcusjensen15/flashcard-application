import React, { Component } from 'react';
import './DrawButton.css';

class DrawButton extends Component{
  constructor(props){
    super(props);
  }

  drawCard = () => {
    this.props.updateCard();
  }

  render(props){
    return(
      <div className="buttonContainer">
        <button className="btn" onClick={this.drawCard}>Draw Card</button>
      </div>
    )
  }
}

export default DrawButton
