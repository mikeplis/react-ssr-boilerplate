import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import './App.css';

const App = () =>
  <Switch>
    <Route exact path="/test" component={Home} />
    <Route exact path="/about" component={Home} />
  </Switch>;

export default App;
