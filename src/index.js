import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom' 
import './index.css';
import history from './history.js'

import App from './App';
import About from './About'

import registerServiceWorker from './registerServiceWorker';

const MyApp = () => {
  return <Router history={history}>
    <Switch>
      <Route path='/about' component={About} />
      <Route component={App} />
      </Switch>
  </Router>
}

ReactDOM.render(
  <BrowserRouter>
    <MyApp />
  </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
