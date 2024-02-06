import { expect } from 'chai';
import { insertRestaurant } from '/imports/api/restaurant.methods';
import { RestaurantCollection } from '/imports/api/restaurant.collection';
import { mock } from '../mockFactory';

describe('insertRestaurant', function () {
  beforeEach(async function () {
    // Remove existing records in RestaurantCollection
    await RestaurantCollection.removeAsync({}).catch((error) =>
      console.error('Error when removing records in collection:', error)
    );
  });

  it('returns a message property containing the _id', async function () {
    const mockRestaurant = mock.restaurant();
    const result = await insertRestaurant(mockRestaurant);

    const foundResult = await RestaurantCollection.findOneAsync({
      name: mockRestaurant.name,
    }).catch((err) => console.error(err));

    expect(result.message).to.equal(foundResult?._id);
  });

  it('returns a status property containing "success"', async function () {
    const mockRestaurant = mock.restaurant();
    const result = await insertRestaurant(mockRestaurant);

    expect(result.status).to.equal('success');
  });

  it('');

  after(async function () {
    // Remove existing records in RestaurantCollection
    await RestaurantCollection.removeAsync({}).catch((error) =>
      console.error('Error when removing records in collection:', error)
    );
  });
});
