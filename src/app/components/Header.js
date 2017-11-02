import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import {Login} from './Login';
import {Match} from 'react-router-dom';
//import './tabOnClick.js';
export class Header extends React.Component{
  constructor(){
    super();
    this.state={
      color_h: false,
      color_l: true,
      color_r: true
    }

  }



  tabColorh(){
    if(this.state.color_h==true){
    this.setState(
      {
        color_h: !this.state.color_h,
        color_l: true,
        color_r: true
      }
    );
  }

}

  tabColorl(){
  if(this.state.color_l==true){
  this.setState(
    {
      color_l: !this.state.color_l,
      color_h: true,
      color_r: true
    }
  );
}
}

tabColorr(){
if(this.state.color_r==true){
this.setState(
  {
    color_r: !this.state.color_r,
    color_l: true,
    color_h: true
  }
);
}
  }
  render(){
    let bgColorh = null;
    let bgColorl = null;
    let bgColorr = null;
    if(!this.state.color_h){
      bgColorh="red";
      bgColorl = "#333";
      bgColorr = "#333";

    }
     if(!this.state.color_l){
      bgColorl="red";
      bgColorh = "#333";
      bgColorr = "#333";

    }
     if(!this.state.color_r){
      bgColorr="red";
      bgColorh = "#333";
      bgColorl = "#333";

    }
    return(


      <nav>
      <ul>
      <li ><a style={{backgroundColor: bgColorh}}  className="active" href="/" onClick={()=>this.tabColorh()}>Home</a></li>
      <li  ><a style={{backgroundColor: bgColorl}} className="active" href="login" onClick={()=>this.tabColorl()}>Login</a></li>
      <li  ><a style={{backgroundColor: bgColorr}} className="active" href="register" onClick={()=>this.tabColorr()}>Register</a></li>
      </ul>
      </nav>


    );
  }
}
