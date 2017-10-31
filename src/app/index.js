// React.
//import {render} from 'react-dom';
import React from 'react';
import ReactDOM from 'react-dom';
// React Router DOM.
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

// Root.
import {
  Root
} from './components/Root';

// Home.
import {
  Home
} from './components/Home';

//Header

import {
  Header
} from './components/Header';

// Render.
ReactDOM.render(
  <Router>

      <Switch>

        <Route path="/" component={Header} exact/>
        <Route path="/home" component={Home} exact/>
        

      </Switch>

  </Router>
, document.querySelector('#app'));
