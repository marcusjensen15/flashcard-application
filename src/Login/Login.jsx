import React, { Component } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../scss/_login.scss'



export default function Login(){

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
      <div className="loginContainer">
        <Link className="linkText" to='/'> Home </Link>
        <h2 className="loginTitle">Login</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input type="text" ref={(input) => {email = input;}}/>
          </label>

          <label>
            Password:
            <input type="text" ref={(input) => {password = input;}}/>
          </label>

          <input type="submit" value="Submit" />
        </form>
      </div>
    )
}
