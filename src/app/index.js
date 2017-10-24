var React=require('react');
var ReactDOM= require('react-dom');


class App extends React.Component{
  render(){
    return(<div><h1>hello!!!</h1></div>);
    }
}

ReactDOM.render(<App/>, window.document.getElementById('app'));
