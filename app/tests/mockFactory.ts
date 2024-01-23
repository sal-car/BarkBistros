import { faker } from '@faker-js/faker';

export const mock = {
  restaurant: (data?: Partial<Restaurant>): Restaurant => {
    return {
      name: faker.company.name(),
      address: faker.location.streetAddress(),
      tags: [faker.word.noun(), faker.word.noun()],
      creation_date: faker.date.past(),
      opening_hours: {
        monday: '05:00-06:00',
        tuesday: '05:00-06:00',
        wednesday: '05:00-06:00',
        thursday: '05:00-06:00',
        friday: '05:00-06:00',
        saturday: '05:00-06:00',
        sunday: '05:00-06:00',
      },
      ...data,
    };
  },
  openingHours: (data: Partial<OpeningHours>): Restaurant => {
    return {
      name: faker.company.name(),
      address: faker.location.streetAddress(),
      tags: [faker.word.noun(), faker.word.noun()],
      creation_date: faker.date.past(),
      opening_hours: {
        monday: '05:00-06:00',
        tuesday: '05:00-06:00',
        wednesday: '05:00-06:00',
        thursday: '05:00-06:00',
        friday: '05:00-06:00',
        saturday: '05:00-06:00',
        sunday: '05:00-06:00',
        ...data,
      },
    };
  },
};
