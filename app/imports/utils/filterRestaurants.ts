/**
 * Filters restaurants by given search term.
 * Will match name, address & tags.
 *
 * @param {Restaurant[]} restaurants - Array of restaurants to filter.
 * @param {string} searchTerm - Search term to filter restaurants.
 * @returns {Restaurant[] | []} - Filtered array of restaurants or an empty array.
 */
export const filterBySearch = (
  restaurants: Restaurant[],
  searchTerm: string,
): Restaurant[] | [] => {
  if (!searchTerm) return restaurants;

  const normalizedSearchTerm = searchTerm.toLowerCase();

  return restaurants.filter((restaurant) => {
    const { name, address, tags } = restaurant;
    const isNameMatch = name.toLowerCase().includes(normalizedSearchTerm);
    const isAddressMatch = address.toLowerCase().includes(normalizedSearchTerm);
    const isTagMatch = tags.some((tag) => tag.toLowerCase().includes(normalizedSearchTerm));

    return isNameMatch || isAddressMatch || isTagMatch;
  });
};

/**
 * Filters restaurants based on opening hours.
 * Will match restaurants that are open now (at runtime).
 *
 * @param {Restaurant[]} restaurants - Array of restaurants to filter.
 * @returns {Restaurant[] | []} - Filtered array of restaurants or an empty array.
 */
export const filterByOpenNow = (
  restaurants: Restaurant[],
): Restaurant[] | [] => {
  const { day, hour } = getCurrentHourAndDay();

  const restaurantsOpenNow = restaurants.filter((restaurant) => {
    const openingHours = restaurant.openingHours as OpeningHours;
    return isOpen(hour, openingHours[day]);
  });

  return restaurantsOpenNow.length >= 1 ? restaurantsOpenNow : [];
};

/**
 * Gets current weekday and hour in 24-hour format.
 * Example: on Monday 1PM, returns {day: monday, hour: 13}
 *
 * @returns {{day: string, hour: number}} - Object containing current weekday and hour.
 */
type CurrentHourDay = {
  day: string,
  hour: number
}
export const getCurrentHourAndDay = ():CurrentHourDay => {
  const daysOfTheWeek: { [key: number]: string } = {
    0: 'sunday',
    1: 'monday',
    2: 'tuesday',
    3: 'wednesday',
    4: 'thursday',
    5: 'friday',
    6: 'saturday',
  };

  const day = daysOfTheWeek[new Date().getDay()];
  const hour = new Date().getHours();
  return { day, hour };
};

/**
 * Checks if thisHour is in range of openingHours.
 * Example: thisHour = 11, openingHours = '10:00-19:00', returns true
 *
 * @param {number} thisHour - Current hour to check.
 * @param {string} openingHours - String representation of opening hours.
 * @returns {boolean} - True if the restaurant is open at the current hour, false otherwise.
 */
export const isOpen = (thisHour: number, openingHours: string): boolean => {
  try {
    const { startHour, endHour } = extractStartAndEndHours(openingHours);
    return !!(startHour <= thisHour && thisHour < endHour);
  } catch (error) {
    console.error(`Error in isOpen: ${error}`);
    return false;
  }
};

/**
 * Extracts the start and end hour of a string with format "HH:MM-HH:MM" as numbers.
 * Example: times = '10:00-19:00', returns {startHour: 10, endHour: 19}
 *
 * @param {string} times - String representing the opening hours.
 * @returns {{startHour: number, endHour: number}} - Object containing start and end hours.
 * @throws {Error} - Throws an error if the input string is not in valid HH:MM-HH:MM format.
 */
type StartEndHours = {
  startHour: number,
  endHour: number
}
export const extractStartAndEndHours = (times: string): StartEndHours => {
  // eslint-disable-next-line prefer-regex-literals
  const validInput = new RegExp('^(?:[0-1]\\d|[2][0-4])[:][0-6][0-9][-](?:[0-1]\\d|[2][0-4])[:][0-6][0-9]');

  if (validInput.test(times) === false) {
    throw new Error(
      'Error parsing string, input is not valid HH:MM-HH:MM format',
    );
  }

  const [startHour, endHour] = times
    .split('-')
    .map((time) => parseInt(time.split(':')[0], 10));
  return { startHour, endHour };
};
