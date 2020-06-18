import React, { Component } from 'react';
import './DrawButton.css';


class DrawButton extends Component{
  constructor(props){
    super(props);
  }


  render(props){
    return(
      <div className="buttonContainer">
        <button className="btn" onClick={this.props.updateCard}>Draw Card</button>
      </div>
    )
  }
}

export default DrawButton
