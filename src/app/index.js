var React=require('react');
//var ReactDOM= require('react-dom');
import {render} from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import {IndexRoute} from 'react-router';
//import {Router,browserHistory,Route} from 'react-router';
//import './main.scss';
//import routes from './routes';
import {Header} from './components/Header';
import {Home} from './components/Home';
import {Root} from './components/Root';


class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
      <Route path={"/"} component={Root}/>
      

      </BrowserRouter>
    );
  }
}

render(<App/>, window.document.getElementById('app'));
