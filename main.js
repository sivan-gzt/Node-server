import router from './src/router/routes/cardsRestController';

const express = require('express');
const app = express();
const chalk = require('chalk');

app.use(router);