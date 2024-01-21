// run publications defined in imports/api/restaurant.publications.ts
import { getAllRestaurants } from '../api/restaurant.publications';
import { Meteor } from 'meteor/meteor';

export function runPublications() {
  Meteor.publish('restaurants', getAllRestaurants);
}
