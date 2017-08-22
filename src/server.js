import { StaticRouter, matchPath } from 'react-router-dom';

import App from './App';
import React from 'react';
import express from 'express';
import path from 'path';
import { renderToString } from 'react-dom/server';
import request from 'request';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const reactRender = (req, res) => {
    const context = {};
    const markup = renderToString(
        <StaticRouter context={context} location={req.url}>
            <App />
        </StaticRouter>
    );
    if (context.url) {
        res.redirect(context.url);
    } else {
        res.status(200).send(
            `<!doctype html>
        <html lang="">
        <head>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta charSet='utf-8' />
            <title>Welcome to Razzle</title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            ${assets.client.css ? `<link rel="stylesheet" href="${assets.client.css}">` : ''}
            <script src="${assets.client.js}" defer></script>
        </head>
        <body>
            <div id="root">${markup}</div>
        </body>
    </html>`
        );
    }
};

// These routes also need to be handled on the client side in App.js
const reactRoutes = ['/test', '/about'];

const server = express();
server
    .disable('x-powered-by')
    .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
    .get(reactRoutes, reactRender)
    .get('/webpack/*', (req, res) => {
        const newUrl = 'http://localhost:8082' + req.url;
        console.log(newUrl);
        request(newUrl).pipe(res);
    })
    .get('/*', (req, res) => {
        const newUrl = 'http://localhost:8080' + req.url;
        request(newUrl).pipe(res);
    });

export default server;
