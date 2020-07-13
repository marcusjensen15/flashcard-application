import React, { Component } from 'react';
import './Login.css';
import {Link} from 'react-router-dom';


class Login extends Component{
  constructor(props){
    super(props);
  }


  render(props){
    return(
      <div className="loginContainer">
        <Link className="linkText" to='/'> Home </Link>
        <p >Login Page</p>
      </div>
    )
  }
}

export default Login
