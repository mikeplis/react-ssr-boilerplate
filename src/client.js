import BrowserRouter from 'react-router-dom/BrowserRouter';
import React from 'react';
import { render } from 'react-dom';
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo';
import App from './App';

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
