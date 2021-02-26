const featureServices = require('../services/features.services');

const getFeaturesHandler = async (req, res) => {

   const { query } = req;
//console.log(query)
  //console.log(query.category);

  feature = await featureServices.getFeatures(query.category);
 
  res.status(200).send(feature);
};

module.exports = { getFeaturesHandler };
