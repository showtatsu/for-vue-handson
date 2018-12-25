const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cors = require('cors')
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api');

const app = express();
const corsOptions = {
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
};

app.use(logger('dev'));
app.use(cookieParser());

// Allow Cross Origin Request. (unsecure)
app.use(cors(corsOptions))

// JSON Server entrypoint
app.use('/api', apiRouter);

// Parsers not for json-server
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  // render the error page
  const statusCode = err.status || 500
  res.status(statusCode);
  res.send({ error: statusCode, message: err.message });
});

module.exports = app;
