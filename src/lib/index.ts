import expressLoader from './express';
import mongooseLoader from './mongoose';
import express from 'express';

export default async (expressApp: express.Application) => {
    await mongooseLoader();
    console.log('Mongodb: Loaded and connected');

    await expressLoader(expressApp);
    console.log('Express loaded');
};
