import Joi from 'joi';
import { messagesString } from './validatorMessages';

export const userValidator = {
    create: Joi.object().keys({
        name: Joi.string().required().messages(messagesString),
        username: Joi.string().required().messages(messagesString),
        password: Joi.string().max(25).required().messages(messagesString),
        role: Joi.string().default('user'),
    }),
    login: Joi.object().keys({
        username: Joi.string().required(),
        password: Joi.string().required(),
    }),
};

export const agendaValidator = {
    create: Joi.object().keys({
        name: Joi.string().required(),
        fullname: Joi.string().required(),
        password: Joi.string().required(),
        role: Joi.string().default('user'),
    }),
};
