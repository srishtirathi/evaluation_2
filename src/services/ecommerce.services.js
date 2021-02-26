const { Op } = require('sequelize');
const { Feature } = require('../models');
const { Item } = require('../models');

const createCategory = async (featureName, description, itemid) => {
  const feature = await Feature.create({
    featureName, description, itemid,
  });
  return feature;
};

const createItem = async (itemid, itemName, description, feature, value) => {
  const item = await Item.create({
    itemid, itemName, description, feature, value,
  });
  return item;
};

module.exports = {
  createCategory, createItem,
};
