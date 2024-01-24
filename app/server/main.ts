import { Meteor } from 'meteor/meteor';
import { loadFixtures } from '/imports/startup/loadFixtures';
import { RestaurantCollection } from '/imports/api/restaurant.collection';
import { runPublications } from '/imports/startup/runPublications';

// SERVER ENTRY POINT

Meteor.startup(async () => {
  if (RestaurantCollection.find().count() === 0) {
    // Prepopulate the db
    const result = loadFixtures();

    if (result.success) {
      // Make data available to client
      runPublications();
    }
  }
});
