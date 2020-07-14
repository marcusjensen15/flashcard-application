import React, { Component } from 'react';
import { Link } from 'react-router-dom';



export default function Login(){

  let email = null;
  let confirmEmail = null;
  let password = null;
  let confirmPassword = null;


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
  };


    return(
      <div className="loginContainer">
        <Link className="linkText" to='/'> Home </Link>


        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input type="text" ref={(input) => {email = input;}}/>
          </label>

          <label>
            Confirm Email:
          <input type="text" ref={(input) => {confirmEmail = input;}}/>
          </label>

          <label>
            Password:
            <input type="text" ref={(input) => {password = input;}}/>
          </label>

          <label>
            Confirm Password:
            <input type="text" ref={(input) => {confirmPassword = input;}}/>
          </label>


          <input type="submit" value="Submit" />
        </form>
      </div>
    )
}
