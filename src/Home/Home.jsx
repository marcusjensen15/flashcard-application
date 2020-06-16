import React from 'react';
import '../styles/resumeStyle.css';
import { Link } from 'react-router-dom';



export default function Home(){


  return(
    <>
      <Link to='/train'> Train </Link>
      <Link to='/addCard'> addCards </Link>

    </>
  );
}
