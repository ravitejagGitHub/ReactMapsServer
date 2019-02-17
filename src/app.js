const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require("cors");
const bodyPraser = require("body-parser");

const messagesRoute = require("./api/routers/messages");

const middlewares = require('./middlewares');
const api = require('./api');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(bodyPraser.json());
app.use(cors());
app.use(messagesRoute);


app.get('/', (req, res) => {
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄'
  });
});

app.use('/api/v1', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;