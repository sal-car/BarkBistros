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

  it('returns a success status and message', function () {
    const mockRestaurant = mock.restaurant();
    const result = loadFixtures([mockRestaurant]);

    expect(result.success).to.be.true;
    expect(result.msg).to.equal('Inserted data');
  });

  it('tries to insert an empty data object when no data is available', function () {
    const result = loadFixtures();

    expect(RestaurantCollection.find().count()).to.equal(1);
    expect(result.success).to.be.true;
    expect(result.msg).to.equal('No data available');
  });
});
