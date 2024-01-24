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

export const Restaurant = new SimpleSchema({
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
  creation_date: {
    type: Date,
    optional: false,
  },
  opening_hours: {
    type: OpeningHours,
    optional: false,
  },
});
