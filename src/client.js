import BrowserRouter from 'react-router-dom/BrowserRouter';
import React from 'react';
import { render } from 'react-dom';
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo';
import { hydrate } from 'emotion';
import App from './App';

if (typeof window !== 'undefined') {
    hydrate(window.__EMOTION_DATA__); // eslint-disable-line no-underscore-dangle
}

const createClient = () => {
    return new ApolloClient({
        initialState: window.__APOLLO_STATE__, // eslint-disable-line no-underscore-dangle
        networkInterface: createNetworkInterface({
            uri: 'https://v7qlnqrn3.lp.gql.zone/graphql'
        })
    });
};

render(
    <ApolloProvider client={createClient()}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ApolloProvider>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept();
}
