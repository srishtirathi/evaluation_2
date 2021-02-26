const express = require('express');
const categoryHandler = require('../handlers/ecommerce.handler');

const categoryRouter = express.Router();

categoryRouter.post('/', categoryHandler.createCategoryHandler);

module.exports = {
  categoryRouter,
};
