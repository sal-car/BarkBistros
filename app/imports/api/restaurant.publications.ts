import { RestaurantCollection } from './restaurant.collection';

/**
 Gets all restaurants from the DB.
 
 @function getAllRestaurants
 @returns {Mongo.Cursor} - The cursor containing the restaurants.
 */
export async function getAllRestaurants() {
  let data;
  try {
    data = RestaurantCollection.find({});
  } catch (error) {
    console.error('Error when retrieveing restaurants from database: ', error);
  }
  return data;
}
