/* eslint-disable @typescript-eslint/no-unused-vars */ //esto se escribio para deshabilitar llamado de atencion por tener variables sin usar (especificamente en la ruta "/")
import express from 'express';
import routes from '../api';
import config from '../config';
import cors from 'cors';
import bodyParser from 'body-parser';
import { notFoundHandler, catchErrors, validaRequestBody } from '../api/middlewares/HttpErrorsHandler';

export default (app: express.Application) => {
    app.use(cors());
    app.use(bodyParser.json());

    app.use(config.api.prefix, routes());

    app.use(validaRequestBody);
    app.use(notFoundHandler);
    app.use(catchErrors);
};
