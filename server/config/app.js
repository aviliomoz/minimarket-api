const express = require('express');
const cors = require('cors');
const api = require('./api');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// API
app.use('/api', api);

module.exports = app;
