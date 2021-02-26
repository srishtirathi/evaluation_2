const ecommerceService = require('../../services/ecommerce.services');
const ecommereceHandler = require('../ecommerce.handler');

describe('Handler should', () => {
  it('get quotes from database', async () => {
    const responseValue = {
      id: 91,
      featureName: 'shoes',
      description: 'radiant shoes',
      itemid: 'shoe_8',
      updatedAt: '2021-02-26T06:48:23.388Z',
      createdAt: '2021-02-26T06:48:23.388Z',
    };

    const mockResponse = {
      status: jest.fn(() => mockResponse),
      send: jest.fn(),

    };
    jest.spyOn(ecommerceService, 'createCategory').mockResolvedValue(responseValue);
    await ecommereceHandler.getHandler(null, mockResponse);
    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.send).toHaveBeenCalledWith(responseValue);
    // expect(ecommerceService.getQuotes).toHaveBeenCalledWith('abc');
  });
});
