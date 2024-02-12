import SimpleSchema from 'simpl-schema';

const OpeningHours = new SimpleSchema({
  monday: {
    type: String,
    optional: false,
  },
  tuesday: {
    type: String,
    optional: false,
  },
  wednesday: {
    type: String,
    optional: false,
  },
  thursday: {
    type: String,
    optional: false,
  },
  friday: {
    type: String,
    optional: false,
  },
  saturday: {
    type: String,
    optional: false,
  },
  sunday: {
    type: String,
    optional: false,
  },
});

const Restaurant = new SimpleSchema({
  name: {
    type: String,
    optional: false,
  },
  address: {
    type: String,
    optional: false,
  },
  tags: {
    type: Array,
    optional: false,
  },
  'tags.$': {
    type: String,
    optional: false,
  },
  creationDate: {
    type: Date,
    optional: false,
  },
  openingHours: {
    type: OpeningHours,
    optional: false,
  },
});

export default Restaurant;
