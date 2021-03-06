import React, { Component } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../../scss/_loginSignup.scss';
import Header from '../Header/Header';




export default function Signup(props){

  let email = null;
  let confirmEmail = null;
  let password = null;
  let confirmPassword = null;
  let history = useHistory();


  function handleSubmit(event){
    event.preventDefault();
    console.log({
      email: email.value,
      confirmEmail: confirmEmail.value,
      password: password.value,
      confirmPassword: confirmPassword.value
      });

      email.value = '';
      confirmEmail.value = '';
      password.value = '';
      confirmPassword.value = '';

      history.push("/train");
  };


    return(
      <div className="signupContainer">
        <Header isLoggedIn={props.isLoggedIn}/>
        <h2 className="signupTitle">Signup</h2>

        <div className="formContainer">
          <form onSubmit={handleSubmit}>
            <div className="inputContainer">
              <label>
                Email
                <input className="textInput" type="text" ref={(input) => {email = input;}}/>
              </label>
            </div>

            <div className="inputContainer">
              <label className="inputContainer">
                Confirm Email
              <input className="textInput" type="text" ref={(input) => {confirmEmail = input;}}/>
              </label>
            </div>

            <div className="inputContainer">
              <label className="inputContainer">
                Password
                <input className="textInput" type="text" ref={(input) => {password = input;}}/>
              </label>
            </div>

            <div className="inputContainer">
              <label className="inputContainer">
                Confirm Password
                <input className="textInput" type="text" ref={(input) => {confirmPassword = input;}}/>
              </label>
            </div>


            <input className="buttonContainer" type="submit" value="Submit" />
          </form>
      </div>
      </div>
    )
}
