const featureService = require('../ecommerce.services');

const { Item } = require('../../models');
const { Feature } = require('../../models');

describe('post handler', () => {
  it('should fetch data from database and save in Feature model', async () => {
    const ResolvedValue = {
      featureName: 'abc', description: 'abc', itemid: 'abc',

    };
    jest.spyOn(Feature, 'create').mockResolvedValue(ResolvedValue);
    const feature = await featureService.createCategory('abc', 'abc', 'abc');
    expect(feature).toBe(ResolvedValue);
  });

  it('should fetch data from database and save in Item table', async () => {
    const ResolvedValue = {
      itemid: 'xyz', itemName: 'xyz', description: 'xyz', feature: 'xyz', value: 'xyz',

    };
    jest.spyOn(Item, 'create').mockResolvedValue(ResolvedValue);
    const feature = await featureService.createItem('xyz', 'xyz', 'xyz', 'xyz', 'xyz');
    expect(feature).toBe(ResolvedValue);
  });
});
