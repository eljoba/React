var React=require('react');
var ReactDOM= require('react-dom');

import {Header} from "./components/Header";
import {Home} from "./components/Home";

class App extends React.Component{
  render(){
    return(<div>
      <Header/>
      <Home/>
      </div>);
    }
}

ReactDOM.render(<App/>, window.document.getElementById('app'));
