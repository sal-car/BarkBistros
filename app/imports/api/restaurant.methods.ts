import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Restaurant } from '/db/schemas';
import { RestaurantCollection } from './restaurant.collection';
import { winston } from '../../server/logger';

/**
 Inserts a new restaurant into the restaurants collection.

 @async
 @function insertRestaurant
 @param {Object} data - The restaurant data.
 @returns {String} - The ID of the inserted restaurant.
 */
export async function insertRestaurant(data: Restaurant) {
  try {
    Restaurant.validate(data);

    const result = await RestaurantCollection.insertAsync(data);

    return { status: 'success', message: result };
  } catch (error) {
    winston.log('error', `Error when inserting restaurant ${data} : ${error}`);
    return { status: 'failed', message: error };
  }
}

Meteor.methods({
  'restaurants.search'({ searchTerm }) {
    if (!searchTerm) return RestaurantCollection.find().fetch();

    check(searchTerm, String);

    let result: Restaurant[] | [];
    try {
      result = RestaurantCollection.find({
        $or: [
          { name: { $regex: searchTerm, $options: 'i' } },
          { address: { $regex: searchTerm, $options: 'i' } },
          { tags: { $regex: searchTerm, $options: 'i' } },
        ],
      }).fetch();

      return result;
    } catch (error) {
      winston.log(
        'error',
        `Error when searching for restaurants in database: ${error}`
      );
      throw new Meteor.Error(
        `Error when searching for restaurants in database: ${error}`,
        'Internal server error'
      );
    }
  },
});
