import React from 'react';
import { Link } from 'react-router-dom';
import '../../scss/_header.scss';



export default function Header(props){

  let isLoggedIn = props.isLoggedIn;

  const LoggedInHeader = () => {
    return(
    <div className="headerContainer">
      <div className="linkContainer">
        <Link className="linkStyle" to='/train'> Train </Link>
        <Link className="linkStyle" to='/addCard'> Add Cards </Link>
        <Link className="linkStyle" to='/login'> Login </Link>
        <Link className="linkStyle" to='/signup'> Signup </Link>
      </div>
    </div>
  )};

  const LoggedOutHeader = () => {
    return(
      <div className="headerContainer">
        <div className="linkContainer">
          <Link className="linkStyle" to='/login'> Login </Link>
          <Link className="linkStyle" to='/signup'> Signup </Link>
        </div>
      </div>
  )};

  const PresentedHeader = () => {
    if (isLoggedIn){
      return <LoggedInHeader/>
    }
    return <LoggedOutHeader/>
  };




  return(
      <PresentedHeader/>
  );
}
