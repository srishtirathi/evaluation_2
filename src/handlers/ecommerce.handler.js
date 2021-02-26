const fetch = require('node-fetch');
const categoryServices = require('../services/ecommerce.services');

// const getHandlerByTag = async (req, res) => {
//   const { tag } = req.body;
//   const quote = await categoryServices.getQuoteByTag(tag);
//   res.status(200).send(quote);
// };

const createCategoryHandler = async (req, res) => {
  const { query } = req;



  const names = JSON.parse(query.name);
  let item;
  let category;
  for (let i = 0; i < names.length; i++) {
   
    const getData = await fetch(
      `https://backend-evaluation-lgsvu.ondigitalocean.app/category?name=${names[i]}`,
    );
    const categoryData = await getData.json();

  

    for (let j = 0; j < categoryData.itemMetadata.length; j++) {
      category = await categoryServices.createCategory(categoryData.name, categoryData.description, categoryData.itemMetadata[j].id);

      let itemData = await fetch(
        `https://backend-evaluation-lgsvu.ondigitalocean.app/items/${categoryData.itemMetadata[j].id}`,

      );
      itemData = await itemData.json();
      

      for (let k = 0; k < itemData.features.length; k++) {
        item = await categoryServices.createItem(categoryData.itemMetadata[j].id, 'a', 'a', itemData.features[k].name, itemData.features[k].value);
      }
    }

    res.status(200).send(category);
  }
};

module.exports = {
  createCategoryHandler,
};
