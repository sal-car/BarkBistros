import { faker } from '@faker-js/faker';

const mock = {
  restaurant: (data?: Partial<Restaurant>): Restaurant => ({
    name: faker.company.name(),
    address: faker.location.streetAddress(),
    tags: [faker.word.noun(), faker.word.noun()],
    creationDate: faker.date.past(),
    openingHours: {
      monday: '05:00-06:00',
      tuesday: '05:00-06:00',
      wednesday: '05:00-06:00',
      thursday: '05:00-06:00',
      friday: '05:00-06:00',
      saturday: '05:00-06:00',
      sunday: '05:00-06:00',
    },
    ...data,
  }),
  openingHours: (data: Partial<OpeningHours>): Restaurant => ({
    name: faker.company.name(),
    address: faker.location.streetAddress(),
    tags: [faker.word.noun(), faker.word.noun()],
    creationDate: faker.date.past(),
    openingHours: {
      monday: '05:00-06:00',
      tuesday: '05:00-06:00',
      wednesday: '05:00-06:00',
      thursday: '05:00-06:00',
      friday: '05:00-06:00',
      saturday: '05:00-06:00',
      sunday: '05:00-06:00',
      ...data,
    },
  }),
};

export default mock;
