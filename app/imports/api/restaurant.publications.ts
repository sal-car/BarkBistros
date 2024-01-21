import { RestaurantCollection } from './restaurant.collection';

/**
 Gets all restaurants from the DB.
 
 @function getAllRestaurants
 @returns {Mongo.Cursor} - The cursor containing the restaurants.
 */
export async function getAllRestaurants() {
  return RestaurantCollection.find({});
}
