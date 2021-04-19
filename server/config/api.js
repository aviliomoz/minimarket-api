const express = require('express');

const api = express();

api.use('/categories', require('../routes/categoriesRoutes'));
api.use('/products', require('../routes/productsRoutes'));

module.exports = api;
