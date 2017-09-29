import { StaticRouter } from 'react-router-dom';
import { ApolloClient, createNetworkInterface, ApolloProvider, getDataFromTree } from 'react-apollo';

import React from 'react';
import express from 'express';
// import path from 'path';
import { renderToString } from 'react-dom/server';
// TODO: probably don't need both request and isomorphic-fetch
import request from 'request';
// eslint-disable-next-line no-unused-vars
import fetch from 'isomorphic-fetch'; // used by react-apollo
import { extractCritical } from 'emotion-server';
import App from './App';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST); // eslint-disable-line import/no-dynamic-require

const i18nextMiddleware = require('i18next-express-middleware'); // has no proper import yet
import Backend from 'i18next-node-fs-backend';
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';

const reactRender = (req, res) => {
    const client = new ApolloClient({
        ssrMode: true,
        networkInterface: createNetworkInterface({
            uri: 'https://v7qlnqrn3.lp.gql.zone/graphql'
        })
    });

    const context = {};

    const app = (
        <ApolloProvider client={client}>
            <I18nextProvider i18n={req.i18n}>
                <StaticRouter location={req.url} context={context}>
                    <App />
                </StaticRouter>
            </I18nextProvider>
        </ApolloProvider>
    );

    if (context.url) {
        res.redirect(context.url);
    } else {
        getDataFromTree(app).then(() => {
            const initialI18nStore = {};
            req.i18n.languages.forEach(l => {
                initialI18nStore[l] = req.i18n.services.resourceStore.data[l];
            });
            const initialLanguage = req.i18n.language;

            const content = renderToString(app);

            // NOTE: NOT sure what the difference is between client.store.getState() and client.getInitialState()
            const initialState = { apollo: client.getInitialState() };
            // const initialState = client.store.getState();

            const { ids, css } = extractCritical(content);

            res.status(200).send(
                `<!doctype html>
                    <html lang="">
                    <head>
                        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                        <meta charSet='utf-8' />
                        <meta name="viewport" content="width=device-width, initial-scale=1">
                        ${assets.client.css ? `<link rel="stylesheet" href="${assets.client.css}">` : ''}
                        <script src="${assets.client.js}" defer></script>
                        <style>${css}</style>
                    </head>
                    <body>
                        <div id="root">${content}</div>
                        <script>
                            window.__APOLLO_STATE__ = ${JSON.stringify(initialState).replace(/</g, '\\u003c')}
                            window.__EMOTION_DATA__ = ${JSON.stringify(ids)}
                            window.initialI18nStore = JSON.parse('${JSON.stringify(initialI18nStore)}');
                            window.initialLanguage = '${initialLanguage}';
                        </script>
                    </body>
                </html>`
            );
        });
    }
};

// These routes also need to be handled on the client side in App.js
const reactRoutes = ['/hello', '/foo'];

const server = express();

i18n
    .use(Backend)
    .use(i18nextMiddleware.LanguageDetector)
    .init(
        {
            preload: ['en', 'de'],
            backend: {
                loadPath: __dirname + '/locales/{{lng}}/{{ns}}.json',
                addPath: __dirname + '/locales/{{lng}}/{{ns}}.missing.json'
            }
        },
        () => {
            server
                .disable('x-powered-by')
                .use(i18nextMiddleware.handle(i18n))
                .use('/locales', express.static(__dirname + '/locales'))
                .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
                .get(reactRoutes, reactRender)
                .get('/webpack/*', (req, res) => {
                    const newUrl = `http://localhost:8082${req.url}`;
                    request(newUrl).pipe(res);
                })
                .get('/*', (req, res) => {
                    const newUrl = `http://localhost:8080${req.url}`;
                    request(newUrl).pipe(res);
                });
        }
    );

export default server;
