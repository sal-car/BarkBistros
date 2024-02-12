import { Mongo } from 'meteor/mongo';
import RestaurantCollection from './restaurant.collection';
import winston from '../../server/logger';

/**
 Gets all restaurants from the DB.

 @function getAllRestaurants
 @returns {Mongo.Cursor} - The cursor containing the restaurants.
 */
function getAllRestaurants(): Mongo.Cursor<Restaurant, Restaurant> | null {
  try {
    const data = RestaurantCollection.find({});
    return data;
  } catch (error) {
    winston.log(
      'error',
      `Error when retrieveing restaurants from database: ${error} `,
    );
    return null;
  }
}

export default getAllRestaurants;
