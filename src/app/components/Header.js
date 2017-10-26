import React from "react";

export class Header extends React.Component{
  render(){
    return(
      <nav>
      <ul>
      <li><a className="active" href="#home">Home</a></li>
      <li><a className="active" href="#login">Login</a></li>
      <li><a className="active" href="#register">Register</a></li>
      </ul>
      </nav>
    );
  }
}
