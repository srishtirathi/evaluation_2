/* eslint-disable no-await-in-loop */
const { Op } = require('sequelize');
const { Feature } = require('../models');
const { Item } = require('../models');

const getFeatures = async (featureName) => {
  // console.log(featureName);
  const feature = JSON.parse(featureName);

  // console.log(typeof featureName);

  const features = await Feature.findAll({
    where: { featureName: feature },
  });

  // console.log(features[0].dataValues.itemid);

  const uniqueItemId = [...new Set(features.map((item) => item.itemid))];

  // console.log(uniqueItemId);
  // console.log(uniqueItemId);

  const Obj = {
    color: [],
    brand: [],
    size: [],
  };

  for (let i = 0; i < uniqueItemId.length; i++) {
    const item = await Item.findAll({
      where: { itemid: uniqueItemId[i] },
    });
    for (let j = 0; j < item.length; j++) {
      if (item[j].dataValues.feature === 'Color') {
        if (!(Obj.color.includes(item[j].dataValues.value))) Obj.color.push(item[j].dataValues.value);
      } else if ((item[j].dataValues.feature === 'Brand')) {
        if (!(Obj.brand.includes(item[j].dataValues.value))) Obj.brand.push(item[j].dataValues.value);
      } else if (!(Obj.size.includes(item[j].dataValues.value))) Obj.size.push(item[j].dataValues.value);
    }

    // if(uniqueItemId[0].dataValue.feature)
  }
  // console.log(Obj);

  return Obj;
};

module.exports = { getFeatures };
