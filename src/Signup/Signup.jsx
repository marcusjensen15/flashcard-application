import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Signup extends Component{
  constructor(props){
    super(props);
    this.state = {
      email: "",
      confirmEmail: "",
      password: "",
      confirmPassword: ""
    }
  }

  handleSubmit = (event) => {
    alert('This is the state: ' + this.state.email + this.state.confirmEmail + this.state.password + this.stateconfirmPassword);
    event.preventDefault();
  };

  handleChange = (event) => {
    this.setState({
      email: event.target.email,
      confirmEmail: event.target.confirmEmail,
      password: event.target.password,
      confirmPassword: event.target.confirmPassword
      });
  };


  render(props){
    return(
      <div className="signupContainer">
        <Link className="linkText" to='/'> Home </Link>


        <form onSubmit={this.handleSubmit}>
          <label>
            Email:
            <input type="text" value={this.state.email} onChange={this.handleChange} />
          </label>

          <label>
            Confirm Email:
          <input type="text" value={this.state.confirmEmail} onChange={this.handleChange} />
          </label>

          <label>
            Password:
            <input type="text" value={this.state.password} onChange={this.handleChange} />
          </label>

          <label>
            Confirm Password:
            <input type="text" value={this.state.confirmPassword} onChange={this.handleChange} />
          </label>


          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default Signup
