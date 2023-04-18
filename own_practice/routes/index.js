const express = require('express')
const authRoute = require('./auth')
const app = express();

const cartRoute = require('./cart');
const productRoutes = require('./product_routes');
// const orderRoutes=require('./order_routes')

app.use('/', productRoutes);
app.use("/", authRoute);
app.use('/', cartRoute);
// app.use('/', orderRoutes);

module.exports = app;