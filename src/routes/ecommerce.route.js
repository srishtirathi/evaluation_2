const express = require('express');
const categoryHandler = require('../handlers/ecommerce.handler');
const featureHandler = require("../handlers/features.handler")
const categoryRouter = express.Router();

categoryRouter.post('/', categoryHandler.createCategoryHandler);
categoryRouter.get('/', featureHandler.getFeaturesHandler);

module.exports = {
  categoryRouter,
};
