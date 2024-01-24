import { expect } from 'chai';
import timemachine from 'timemachine';
import {
  extractStartAndEndHours,
  filterByOpenNow,
  getCurrentHourAndDay,
  isOpen,
} from '/imports/utils/filterRestaurants';
import { mock } from '../mockFactory';

describe('extractStartAndEndHours', function () {
  it('correctly extracts start hour and end hour from a valid string', function () {
    const validInput = '10:00-19:00';
    const extractedHours = extractStartAndEndHours(validInput);
    expect(extractedHours).to.eql({ startHour: 10, endHour: 19 });
  });

  it('throws an error when receiving a string with invalid start hour', function () {
    const invalidStartHour = '34:00-12:00';
    expect(() => extractStartAndEndHours(invalidStartHour)).to.throw(Error);
  });

  it('throws an error when receiving a string with invalid end hour', function () {
    const invalidEndHour = '12:00-25:00';
    expect(() => extractStartAndEndHours(invalidEndHour)).to.throw(Error);
  });

  it('throws an error when receiving a string with an invalid format', function () {
    const invalidFormat = '9am-16pm';
    expect(() => extractStartAndEndHours(invalidFormat)).to.throw(Error);
  });

  it('correctly handles the lowest valid hours (00:00)', function () {
    const lowestValidHours = '00:00-06:00';
    const extractedHours = extractStartAndEndHours(lowestValidHours);
    expect(extractedHours).to.eql({ startHour: 0, endHour: 6 });
  });

  it('correctly handles the highest valid hours (23:59)', function () {
    const highestValidHours = '18:00-23:59';
    const extractedHours = extractStartAndEndHours(highestValidHours);
    expect(extractedHours).to.eql({ startHour: 18, endHour: 23 });
  });

  it('throws an error for an empty string', function () {
    const emptyString = '';
    expect(() => extractStartAndEndHours(emptyString)).to.throw(Error);
  });
});

describe('isOpen', function () {
  it('returns true if thisHour is between openingHours', function () {
    const result = isOpen(13, '09:00-15:00');
    expect(result).to.be.true;
  });

  it('returns false if thisHour is not between openingHours', function () {
    const result = isOpen(17, '09:00-15:00');
    expect(result).to.be.false;
  });

  it('returns false if openingHours is invalid', function () {
    const result = isOpen(12, '9am-3pm');
    expect(result).to.be.false;
  });
});

describe('getCurrentHourAndDay', function () {
  before(function () {
    // Override system settings to a fixed date & time
    const expectedDate = 'January 14, 2024 14:00:42';
    timemachine.config({
      dateString: expectedDate,
    });

    // Check that it works as expected
    expect(new Date(expectedDate).toISOString()).to.equal(
      new Date().toISOString()
    );
  });

  it('returns the weekday and hour based on current system time', function () {
    const sundayTwoPM = { day: 'sunday', hour: 14 };
    expect(getCurrentHourAndDay()).to.eql(sundayTwoPM);
  });

  //  Reset time to current system time
  after(function () {
    timemachine.reset();
  });
});

describe('filterByOpenNow', function () {
  let openOnSundayTwoPM: Restaurant[];
  let openOnMondayFivePM: Restaurant[];
  before(function () {
    // Override system settings to a fixed date & time
    const expectedDate = 'January 14, 2024 14:00:42';
    timemachine.config({
      dateString: expectedDate,
    });

    // Check that it works as expected
    expect(new Date(expectedDate).toISOString()).to.equal(
      new Date().toISOString()
    );

    // Mock restaurants
    openOnSundayTwoPM = [
      mock.openingHours({
        sunday: '11:00-16:00',
      }),
      mock.openingHours({
        sunday: '09:00-15:00',
      }),
    ];

    openOnMondayFivePM = [
      mock.openingHours({
        monday: '11:00-18:00',
      }),
      mock.openingHours({
        monday: '13:00-21:00',
      }),
    ];
  });

  it('returns an array', function () {
    const result = filterByOpenNow(openOnSundayTwoPM);
    expect(Array.isArray(result)).to.be.true;
  });

  it('returns an array of restaurants that are open at system time', function () {
    const result = filterByOpenNow([
      ...openOnSundayTwoPM,
      ...openOnMondayFivePM,
    ]);
    expect(result.length).to.equal(openOnSundayTwoPM.length);
    expect(result[0].name).to.equal(openOnSundayTwoPM[0].name);
  });

  it('returns an empty array when no restaurants are open', function () {
    const result = filterByOpenNow(openOnMondayFivePM);
    expect(Array.isArray(result)).to.be.true;
    expect(result.length).to.equal(0);
  });

  //  Reset time to current system time
  after(function () {
    timemachine.reset();
  });
});
