import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Hello from './components/Hello'; // eslint-disable-line import/no-named-as-default
import Foo from './components/Foo';
import './App.css';

// NOTE: changes to the handled routes need to be mirrored in server.js
const App = () => (
    <Switch>
        <Route exact path="/hello" component={Hello} />
        <Route exact path="/foo" component={Foo} />
    </Switch>
);

export default App;
