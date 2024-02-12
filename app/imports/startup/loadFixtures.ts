import insertRestaurant from '../api/restaurant.methods';
import winston from '../../server/logger';

/**
 * @function loadFixtures
 * @param {Restaurant[]} data - an array of restaurant objects
 * @returns {object}

*/ function loadFixtures(data?: Restaurant[]): dbMethodsData {
  try {
    if (!data || data.length < 1) throw new Error("There's no data to insert");
    else {
      data.forEach(async (item) => {
        const result = await insertRestaurant(item);
        if (result.status === 'failed') {
          throw new Error(
            `Insertion of restaurant ${item} failed: ${result.message}`,
          );
        }
      });
    }

    return { status: 'success', message: 'Fixtures loaded' };
  } catch (error) {
    winston.log('error', `Error in loading fixtures: ${error} `);
    if (error instanceof Error) {
      return { status: 'failed', message: error.message };
    }
    return { status: 'failed', message: 'Unknown server error' };
  }
}

export default loadFixtures;
