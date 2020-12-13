import express from 'express';
import config from './config';
import libreries from './lib';

async function startServer() {
    const app = express();

    libreries(app);

    app.listen(config.port, function () {
        console.log('App listening in port ' + config.port);
    });
}

startServer();
