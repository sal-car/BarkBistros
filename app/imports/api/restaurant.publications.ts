import { RestaurantCollection } from './restaurant.collection';
import { winston } from '../../server/logger';

/**
 Gets all restaurants from the DB.
 
 @function getAllRestaurants
 @returns {Mongo.Cursor} - The cursor containing the restaurants.
 */
export function getAllRestaurants() {
  try {
    winston.log('info', 'Retrieving restaurants from database...');
    const data = RestaurantCollection.find({});
    return data;
  } catch (error) {
    winston.log(
      'error',
      `Error when retrieveing restaurants from database: ${error} `
    );
    return null;
  }
}
