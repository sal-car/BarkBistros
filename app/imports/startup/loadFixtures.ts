// Prepopulate DB using methods defined in imports/api/restaurant.methods.ts
// && data defined in imports/server/db/fixtures
import { insertRestaurant } from '../api/restaurant.methods';
import { data } from '/server/db/fixtures';

export function loadFixtures() {
  try {
    if (data.length > 1) {
      data.forEach((item) => {
        insertRestaurant(item);
      });

      return { success: true, msg: 'Inserted data' };
    } else {
      throw new Error("There's no data to insert");
    }
  } catch (error) {
    console.log('Error in loading fixtures: ', error);
    console.log('Inserting an empty data object....');

    try {
      const emptyMock = {
        name: '',
        address: '',
        tags: ['', ''],
        creation_date: new Date(),
        opening_hours: {
          monday: '',
          tuesday: '',
          wednesday: '',
          thursday: '',
          friday: '',
          saturday: '',
          sunday: '',
        },
      };

      insertRestaurant(emptyMock);

      return { success: true, msg: 'No data available' };
    } catch (error) {
      console.error(
        'Error in loading fixtures when trying to insert an empty data object: ',
        error
      );
      return { success: false, msg: error };
    }
  }
}
