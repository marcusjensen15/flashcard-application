import React from 'react';
import './homeStyle.css';
import { Link } from 'react-router-dom';



export default function Home(){


  return(
    <div className="homeContainer">
      <div className="linkContainer">
        <Link className="linkStyle" to='/train'> Train </Link>
        <Link className="linkStyle" to='/addCard'> Add Cards </Link>
        <Link className="linkStyle" to='/login'> Login </Link>
        <Link className="linkStyle" to='/signup'> Signup </Link>
      </div>
    </div>
  );
}
