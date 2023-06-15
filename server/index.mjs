'use strict';

import 'dotenv/config';
import actuator from 'express-actuator';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import session from 'express-session';

import routerUsers from './routers/users.mjs';

const OPTS_CORS = {
    credentials: true,
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
};

const OPTS_SESSION = {
    cookie: { secure: false },
    resave: false,
    saveUninitialized: true,
    secret: process.env.SERVER_SECRET,
};

const error = async (err, req, res, next) => {
    res.status(500);
    next(err);
};

const logger = (req, res, next) => {
    console.table({
        time: new Date().toUTCString(),
        url: `${req.protocol}://${req.get('host')}${req.path}`,
        method: req.method,
    });

    next();
};

const app = express();

app.listen(process.env.SERVER_PORT, () => {
    console.log('\x1b[35m%s\x1b[0m', `Server listening on PORT ${process.env.SERVER_PORT}.`);
});

app.disable('strict routing');
app.disable('x-powered-by');
app.enable('case sensitive routing');
app.set('env', 'production');

app.use(express.json());
app.use(express.raw());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

app.use(actuator());
app.use(compression());
app.use(cookieParser());
app.use(cors(OPTS_CORS));
app.use(helmet());
app.use(session(OPTS_SESSION));

app.use(logger);
app.use('/api/users', routerUsers);
app.use(error);
