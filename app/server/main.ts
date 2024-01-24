import { Meteor } from 'meteor/meteor';
import { loadFixtures } from '/imports/startup/loadFixtures';
import { RestaurantCollection } from '/imports/api/restaurant.collection';
import { runPublications } from '/imports/startup/runPublications';
import { data } from '/db/fixtures';

// SERVER ENTRY POINT

Meteor.startup(async () => {
  if (RestaurantCollection.find().count() === 0) {
    // Prepopulate the db
    const result = loadFixtures(data);

    if (!result.success) console.error('Error in startup: ', result.msg);
  }

  // Make data available to client
  runPublications();
});
