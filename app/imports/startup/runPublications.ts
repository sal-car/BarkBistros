import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import getAllRestaurants from '../api/restaurant.publications';
import winston from '../../server/logger';

function runPublications(): void {
  Meteor.publish('restaurants', function publishRestaurants(): Mongo.Cursor<
    Restaurant,
    Restaurant
  > | void {
    try {
      const data = getAllRestaurants();

      if (!data) throw new Error('No data retrieved from getAllRestaurants');

      return data;
    } catch (error) {
      winston.log('error', `Error in runPublications: ${error}`);
      this.error(
        new Meteor.Error('no-data', 'No data retrieved from getAllRestaurants'),
      );
    }
  });
}

export default runPublications;
