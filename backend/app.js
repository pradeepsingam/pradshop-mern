const express = require('express');
const app = express();

const products = require('./routes/product');

app.use('/api/v1/', products)

module.exports = app;

// https://www.youtube.com/watch?v=29ndIYDMosE&list=PL7BQ4lqtgECRG2oWnM-m5d3oyoZ8zwbD2&index=2