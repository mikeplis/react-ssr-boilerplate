import http from 'http';
import app from './server';

const server = http.createServer(app);

let currentApp = app;

server.listen(process.env.PORT || 3000);

if (module.hot) {
    console.log('✅  Server-side HMR Enabled!'); // eslint-disable-line no-console

    module.hot.accept('./server', () => {
        console.log('🔁  HMR Reloading `./server`...'); // eslint-disable-line no-console
        server.removeListener('request', currentApp);
        const newApp = require('./server').default; // eslint-disable-line global-require
        server.on('request', newApp);
        currentApp = newApp;
    });
}
