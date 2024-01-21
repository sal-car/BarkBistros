import { Mongo } from 'meteor/mongo';

export const RestaurantCollection = new Mongo.Collection<Restaurant>(
  'restaurants'
);
