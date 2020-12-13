import { isCelebrateError } from 'celebrate';
import { Request, Response, NextFunction } from 'express';
import { ValidationError } from 'joi';
import CustomError from '../../utils/CustomError';

export const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
    const err = new CustomError(404, 'Recurso no encontrado');

    next(err);
};

export const validaRequestBody = (error: any, req: Request, res: Response, next: NextFunction) => {
    const result = {
        status: 400,
        messages: [] as any,
    };
    if (!isCelebrateError(error)) next(error);
    if (error.details) {
        error.details.forEach((e: ValidationError) => {
            result.messages.push(e.message);
        });
    }

    res.status(result.status).json(result);
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const catchErrors = (err: CustomError, req: Request, res: Response, next: NextFunction) => {
    res.status(err.status || 500);
    console.log(err.message);
    res.json({
        errors: {
            message: err.message,
        },
        status: err.status,
    });
};
