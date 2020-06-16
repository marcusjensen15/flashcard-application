import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';



export default function Home(){


  return(
    <>
      <Link to='/train'> Train </Link>
      <Link to='/addCard'> Add Cards </Link>

    </>
  );
}
