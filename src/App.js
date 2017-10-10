import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Articles from './components/Articles/Articles';
import Article from './components/Article/Article';
import './App.css';

const App = () => (
    <Switch>
        <Route exact path="/" component={Articles} />
        <Route path="/:id" component={Article} />
    </Switch>
);

export default App;
