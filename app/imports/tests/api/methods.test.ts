import { expect } from 'chai';
import { insertRestaurant } from '/imports/api/restaurant.methods';
import { RestaurantCollection } from '/imports/api/restaurant.collection';
import { mock } from '../../../tests/mockFactory';
import { ClientError } from 'simpl-schema/dist/esm/errors';
import { ValidationError } from 'simpl-schema/dist/esm/types';

describe('insertRestaurant', function () {
  beforeEach(function () {
    // Remove existing records in RestaurantCollection
    RestaurantCollection.removeAsync({}).catch((error) => console.error(error));
  });

  it('inserts a restaurant in RestaurantCollection', async function () {
    const mockRestaurant = mock.restaurant();
    const resultId = await insertRestaurant(mockRestaurant).catch((err) =>
      console.error(err)
    );

    const foundResult = await RestaurantCollection.findOneAsync({
      name: mockRestaurant.name,
    }).catch((err) => console.error(err));

    expect(resultId).to.equal(foundResult?._id);
  });

  it('throws a validation error when trying to insert an object that is not a restaurant', async function () {
    const randomObject = { name: 'Coffee', type: 'drink' };
    let err: ClientError<ValidationError> | Error | undefined;

    try {
      await insertRestaurant(randomObject as any);
    } catch (error) {
      if (error instanceof ClientError && error.error === 'validation-error') {
        err = error as ClientError<ValidationError>;
      } else {
        err = error as Error;
      }
    }

    const record = await RestaurantCollection.findOneAsync({
      name: randomObject.name,
    });

    expect(err).to.be.instanceOf(ClientError<ValidationError>);
    expect(record).to.be.undefined;
  });
});
