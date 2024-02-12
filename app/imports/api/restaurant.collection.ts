import { Mongo } from 'meteor/mongo';

const RestaurantCollection = new Mongo.Collection<Restaurant>('restaurants');

export default RestaurantCollection;
