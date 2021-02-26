const fetch = require('node-fetch');
const categoryServices = require('../services/ecommerce.services');

// const getHandlerByTag = async (req, res) => {
//   const { tag } = req.body;
//   const quote = await categoryServices.getQuoteByTag(tag);
//   res.status(200).send(quote);
// };

const createCategoryHandler = async (req, res) => {
  try {
    const { query } = req;

    console.log(query.name);

    const names = JSON.parse(query.name);
    let item;
    let category;
    for (let i = 0; i < names.length; i++) {
      console.log('*****');
      console.log(names[i]);

      console.log('*****');
      const getData = await fetch(
        `https://backend-evaluation-lgsvu.ondigitalocean.app/category?name=${names[i]}`,
      );
      const categoryData = await getData.json();

      console.log('^^^^^^^');
      console.log(categoryData.itemMetadata[1].id.id);
      console.log('^^^^^^^');

      for(var j=0;j<categoryData.itemMetadata.length;j++)
      {
        category = await categoryServices.createCategory(categoryData.name, categoryData.description, categoryData.itemMetadata[j].id);
      }

     

    //   for (let j = 0; j < categoryData.itemMetadata.length; j++) {
    //     category = await categoryServices.createCategory(categoryData.name, categoryData.description, categoryData.itemMetadata[j]);
    //     const getItem = await fetch(`https://backend-evaluation-lgsvu.ondigitalocean.app/items/${categoryData.itemMetadata[i]}`);
    //     const itemData = await getItem.json(categoryData.itemMetadata[i], 'a', 'a', 'a', 'a');

    //     item = await categoryServices.createItem();

    //   }
    }

    res.status(200).send(category);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
};

module.exports = {
  createCategoryHandler,
};
