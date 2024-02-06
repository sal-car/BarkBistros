import { Meteor } from 'meteor/meteor';
import { winston } from './logger';
import { loadFixtures } from '/imports/startup/loadFixtures';
import { RestaurantCollection } from '/imports/api/restaurant.collection';
import { runPublications } from '/imports/startup/runPublications';
import { data } from '/db/fixtures';

// SERVER ENTRY POINT

Meteor.startup(async () => {
  winston.log('info', "BarkBistros's server started!");

  if (RestaurantCollection.find().count() === 0) {
    // Prepopulate the db
    loadFixtures(data);
  }

  // Make data available to client
  runPublications();
});
