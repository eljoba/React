var React=require('react');


import {Header} from "./Header";
import {Home} from "./Home";


export class Root extends React.Component{
  render(){
    return(<div>
      <Header/>
      <Home/>
      </div>);
    }
}
