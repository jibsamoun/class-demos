import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import sessions from 'express-session'; // needdat

import usersRouter from './routes/users.js';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const oneDay = 1000 * 60 * 60 * 24; // When cookie expires

app.use(sessions({
    secret: "my secret is super secret lkadsglkjah",
    saveUninitialized: true,
    cookie: {maxAge: oneDay},
    resave: false
}))

app.use('/users', usersRouter);

app.listen(3001, 'localhost', () => {
    console.log('App listening at http://localhost:3000')
})

export default app;
