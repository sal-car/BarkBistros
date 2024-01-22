// TODO: make into JSDoc comments

/* 
Filters restaurants by given search term.
Will match name, address & tags.
*/
export const filterBySearch = (
  restaurants: Restaurant[],
  searchTerm: string
): Restaurant[] => {
  if (!searchTerm) return restaurants;

  const normalizedSearchTerm = searchTerm.toLowerCase();

  return restaurants.filter((restaurant) => {
    const { name, address, tags } = restaurant;
    const isNameMatch = name.toLowerCase().includes(normalizedSearchTerm);
    const isAddressMatch = address.toLowerCase().includes(normalizedSearchTerm);
    const isTagMatch = tags.some((tag) =>
      tag.toLowerCase().includes(normalizedSearchTerm)
    );

    return isNameMatch || isAddressMatch || isTagMatch;
  });
};

/*
Filters restaurants based on opening hours.
Will match restaurants that are open now (at runtime). 
*/
export const filterByOpenNow = (restaurants: Restaurant[]) => {
  const { day, hour } = getCurrentHourAndDay();

  return restaurants.filter((restaurant) => {
    const openingHours = restaurant.opening_hours as OpeningHours;
    return isOpen(hour, openingHours[day]);
  });
};

/* 
Gets current weekday and hour in 24-hour format.
  Example: on Monday 1PM,
  returns {day: monday, hour: 13} 
*/
export const getCurrentHourAndDay = () => {
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

/* 
Checks if thisHour is in range of openingHours.
  Example:
  thisHour = 11
  openingHours = '10:00-19:00'
  returns true 
*/
export const isOpen = (thisHour: number, openingHours: string) => {
  const { startHour, endHour } = extractStartAndEndHours(openingHours);
  return startHour <= thisHour && thisHour < endHour;
};

/* 
Extracts the start and end hour of string with format "HH:MM-HH:MM" as numbers.
  Example:
  times = '10:00-19:00'
  returns {startHour: 10, endHour: 19}
*/
const extractStartAndEndHours = (times: string) => {
  const [startHour, endHour] = times
    .split('-')
    .map((time) => parseInt(time.split(':')[0]));
  return { startHour, endHour };
};
