import { Router } from 'express';
import agenda from './routes/agenda';
import auth from './routes/auth';

export default () => {
    const app = Router();

    agenda(app);
    auth(app);

    return app;
};
