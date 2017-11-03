import React from "react";
import {Header} from './Header';
export class Login extends React.Component{

  constructor() {
     super();
     this.state = { user: {} };
     this.onSubmit = this.handleSubmit.bind(this);
   }
   handleSubmit(e) {
     e.preventDefault();
     var self = this;
     // On submit of the form, send a POST request with the data to the server.
     fetch('/', {
         method: 'POST',
         data: {
           name: self.refs.name,
           job: self.refs.job
         }
       })
       .then(function(response) {
         return response.json()
       }).then(function(body) {
         console.log(body);
       });
   }

    render(){
    return(
      <div>


      <div id="fm">
      <form onSubmit={this.onSubmit} method="post" action="/">
        <div >
        <label>
          Username:
          <input id="uname" type="text" placeholder="Name" ref="name"/>
        </label>
        </div>
        <div >
        <label>
          Password:
          <input id="upass" type="password" placeholder="Job" ref="job"/>
        </label>
        </div>
        <input id="sub" type="submit" value="Submit" />
      </form>
      </div>
      </div>
    );
}
}
