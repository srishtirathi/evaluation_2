const featureService = require('../features.services');

const { Feature } = require('../../models');
const { Item } = require('../../models');

describe('get all quotes ', () => {
  it('should get all quotes from database', async () => {
    const ResolvedValue = {
      id: 147,
      featureName: 'shoes',
      description: 'radiant shoes',
      itemid: 'shoe_8',
      updatedAt: '2021-02-26T09:51:02.468Z',
      createdAt: '2021-02-26T09:51:02.468Z',
    };
    jest.spyOn(Feature, 'findAll').mockResolvedValue(ResolvedValue);
    const feature = await featureService.getFeature();
    expect(feature).toBe(ResolvedValue);
  });
});
