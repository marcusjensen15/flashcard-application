import React, { Component } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../../scss/_loginSignup.scss';
import Header from '../Header/Header';




export default function Login(props){

  let email = null;
  let password = null;
  let history = useHistory();


  function handleSubmit(event){
    event.preventDefault();
    console.log({
      email: email.value,
      password: password.value
      });

      email.value = '';
      password.value = '';

      history.push("/train");

    };


    return(
      <div className="signupContainer">
        <Header isLoggedIn={props.isLoggedIn}/>
        <h2 className="signupTitle">Login</h2>
        <form className="formContainer" onSubmit={handleSubmit}>
          <div className="inputContainer">
            <label className="inputContainer">
              Email:
              <input className="textInput" type="text" ref={(input) => {email = input;}}/>
            </label>
          </div>
          <div className="inputContainer">
            <label className="inputContainer">
              Password:
              <input className="textInput"type="text" ref={(input) => {password = input;}}/>
            </label>
          </div>

          <input className="buttonContainer" type="submit" value="Submit" />
        </form>
      </div>
    )
}
