import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Signup extends Component{
  constructor(props){
    super(props);
  }


  render(props){
    return(
      <div className="signupContainer">
        <Link className="linkText" to='/'> Home </Link>
        <p >Signup Page</p>
      </div>
    )
  }
}

export default Signup
