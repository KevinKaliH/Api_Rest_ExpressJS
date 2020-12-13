import { Router, Request, Response } from 'express';

const route = Router();

export default (app: Router) => {
    app.use('/agenda', route);

    route.get('/', (req: Request, res: Response) => {
        const data = [
            { name: 'agenda1', color: 'red' },
            { name: 'agenda2', color: 'blue' },
        ];

        return res.json(data).status(200);
    });
};
