import { Meteor } from 'meteor/meteor';
import { getAllRestaurants } from '../api/restaurant.publications';
import { winston } from '../../server/logger';

export function runPublications() {
  Meteor.publish('restaurants', function publishRestaurants() {
    try {
      const data = getAllRestaurants();

      if (!data) throw new Error('No data retrieved from getAllRestaurants');

      return data;
    } catch (error) {
      winston.log('error', `Error in runPublications: ${error}`);
      this.error(
        new Meteor.Error('no-data', 'No data retrieved from getAllRestaurants')
      );
    }
  });
}
