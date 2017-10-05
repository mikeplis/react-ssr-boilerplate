import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Hello from './components/Hello'; // eslint-disable-line import/no-named-as-default
import Stories from './components/Stories';
import Story from './components/Story';
import './App.css';

// NOTE: changes to the handled routes need to be mirrored in server.js
const App = () => (
    <Switch>
        <Route exact path="/hello" component={Hello} />
        <Route exact path="/stories/:id" component={Story} />
        <Route exact path="/stories" component={Stories} />
    </Switch>
);

export default App;
