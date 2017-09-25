import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Hello from './components/Hello';
import Foo from './components/Foo';
import './App.css';

// NOTE: changes to the handled routes need to be mirrored in server.js
const App = () => (
    <Switch>
        <Route exact path="/test" component={Home} />
        <Route exact path="/hello" component={Hello} />
        <Route exact path="/foo" component={Foo} />
    </Switch>
);

export default App;
