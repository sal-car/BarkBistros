import { expect } from 'chai';
import { insertRestaurant } from '/imports/api/restaurant.methods';
import { RestaurantCollection } from '/imports/api/restaurant.collection';
import { mock } from '../mockFactory';

describe('insertRestaurant', function () {
  beforeEach(async function () {
    // Remove existing records in RestaurantCollection
    await RestaurantCollection.removeAsync({}).catch((error) =>
      console.error(error)
    );
  });

  it('inserts a restaurant in RestaurantCollection and returns its _id', async function () {
    const mockRestaurant = mock.restaurant();
    const resultId = await insertRestaurant(mockRestaurant).catch((err) =>
      console.error(err)
    );

    const foundResult = await RestaurantCollection.findOneAsync({
      name: mockRestaurant.name,
    }).catch((err) => console.error(err));

    expect(resultId).to.equal(foundResult?._id);
  });
});
