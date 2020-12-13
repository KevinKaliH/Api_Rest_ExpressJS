import { Router, Request, Response, NextFunction } from 'express';
import { userValidator } from '../../utils/validators/validators';
import { IUser } from '../../interfaces/IUser';
import AuthService from '../../services/AuthService';
import { celebrate } from 'celebrate';
import { ILogin } from '../../interfaces/ILogin';

const route = Router();

export default (app: Router) => {
    app.use('/auth', route);

    route.post(
        '/signup',
        celebrate({
            body: userValidator.create,
        }),
        async (req: Request, res: Response, next: NextFunction) => {
            console.log('calling Sign-Up endpoint with body: %o', req.body);
            try {
                const authService = new AuthService();

                const user = await authService.SingUp(req.body as IUser);

                return res.status(200).json({ user });
            } catch (e) {
                next(e);
            }
        },
    );

    route.post(
        '/signIn',
        celebrate({
            body: userValidator.login,
        }),
        async (req: Request, res: Response, next: NextFunction) => {
            console.log('calling Sign-In endpoint with body: ', req.body);

            try {
                const authService = new AuthService();

                const userDTO = await authService.SingIn(req.body as ILogin);
                res.status(200).json(userDTO);
            } catch (e) {
                console.log('errors: %o', e.message);
                next(e);
            }
        },
    );
};
