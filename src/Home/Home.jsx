import React from 'react';
import './homeStyle.css';
import { Link } from 'react-router-dom';



export default function Home(){


  return(
    <>
      <Link className="linkStyle" to='/train'> Train </Link>
      <Link className="linkStyle" to='/addCard'> Add Cards </Link>

    </>
  );
}
