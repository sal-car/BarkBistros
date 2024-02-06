import { expect } from 'chai';
import { mock } from '../mockFactory';
import { loadFixtures } from '/imports/startup/loadFixtures';
import { RestaurantCollection } from '/imports/api/restaurant.collection';

describe('loadFixtures', function () {
  beforeEach(async function () {
    // Remove existing records in RestaurantCollection
    await RestaurantCollection.removeAsync({}).catch((error) =>
      console.error(error)
    );
  });

  it('inserts a restaurant object to the Restaurant Collection', async function () {
    const mockRestaurant = mock.restaurant();
    loadFixtures([mockRestaurant]);

    const foundobjectInDB = await RestaurantCollection.findOneAsync({
      name: mockRestaurant.name,
    });

    expect(mockRestaurant.name).to.equal(foundobjectInDB?.name);
  });

  it('returns a true success boolean', function () {
    const mockRestaurant = mock.restaurant();
    const result = loadFixtures([mockRestaurant]);

    expect(result.success).to.be.true;
  });

  it('returns a false success property if not passed any data', function () {
    const result = loadFixtures([]);
    expect(result.success).to.be.false;
  });
});
