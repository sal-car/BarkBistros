import { Restaurant } from '/db/schemas';
import { RestaurantCollection } from './restaurant.collection';

/**
 Inserts a new restaurant into the restaurants collection.

 @async
 @function insertRestaurant
 @param {Object} data - The restaurant data.
 @returns {String} - The ID of the inserted restaurant.
 */
export async function insertRestaurant(data: Restaurant) {
  Restaurant.validate(data);
  const result = await RestaurantCollection.insertAsync(data);

  return result;
}
