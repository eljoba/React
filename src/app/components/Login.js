import React from "react";
import {Header} from './Header';
export class Login extends React.Component{

    render(){
    return(
      <div>

      <div>
      <Header/>
      </div>
      <div id="fm">
      <form>
        <div >
        <label>
          Username:
          <input id="uname" type="text"/>
        </label>
        </div>
        <div >
        <label>
          Password:
          <input id="upass" type="password"/>
        </label>
        </div>
        <input id="sub" type="submit" value="Submit" />
      </form>
      </div>
      </div>
    );
}
}
