import { Meteor } from 'meteor/meteor';
import { getAllRestaurants } from '../api/restaurant.publications';

export function runPublications() {
  try {
    Meteor.publish('restaurants', function publishRestaurants() {
      let data = getAllRestaurants();

      if (!data) {
        this.error(new Meteor.Error('Error when retrieving data'));
        throw new Meteor.Error('Error when retrieving data');
      }

      return data;
    });
  } catch (error) {
    console.error('Error when running publications: ', error);
  }
}
