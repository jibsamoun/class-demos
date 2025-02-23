import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

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

app.use(function(req, res, next){
    console.log("this is middleware 1, first part", req, res);
    next();
    console.log("this is middleware 1, second part", req, res);
})
app.use(function(req, res, next){
    console.log("this is middleware 2, first part", req, res);
   req.testVal = 3;
    next();
    console.log("this is middleware 2, second part", req, res);
})
app.use(function(req, res, next){
    console.log("this is middleware 3, first part",req.testVal);
    next();
    console.log("this is middleware 3, second part", req, res);
})


app.use('/users', usersRouter);

export default app;
