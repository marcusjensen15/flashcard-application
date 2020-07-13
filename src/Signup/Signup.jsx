import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Signup extends Component{
  constructor(props){
    super(props);
    this.state = {
      email: null,
      confirmEmail: null,
      password: null,
      confirmPassword: null
    }
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
