import { Meteor } from 'meteor/meteor';
import { loadFixtures } from '/imports/startup/loadFixtures';
import { RestaurantCollection } from '/imports/api/restaurant.collection';
import { runPublications } from '/imports/startup/runPublications';

// SERVER ENTRY POINT

Meteor.startup(async () => {
  // Prepopulate the db
  if (RestaurantCollection.find().count() === 0) {
    loadFixtures();
  }

  // Make data available to client
  // runPublications();
});
