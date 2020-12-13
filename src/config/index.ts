import dotenv from 'dotenv';
import CustomError from '../utils/CustomError';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (envFound.error) {
    throw new CustomError(500, 'No se encontro el archivo env');
}

const puerto = process.env.PORT as string;
const urldb = process.env.MONGODB_URI as string;
const saltEnv = process.env.SALT as string;

export default {
    port: parseInt(puerto, 10),

    databaseURL: urldb,

    api: {
        prefix: '/api',
    },

    salt: parseInt(saltEnv),
};
