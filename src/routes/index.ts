import express from 'express';

const productsRouter = require('./products.router');
const usersRouter = require('./users.router');
const categoriesRouter = require('./categories.router');
const addressRouter = require('./address.router');

function routes(app: any) {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/products', productsRouter);
    router.use('/users', usersRouter);
    router.use('/categories', categoriesRouter);
    router.use('/address', addressRouter);
}

module.exports = routes;

