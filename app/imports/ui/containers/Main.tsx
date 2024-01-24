import { Meteor } from 'meteor/meteor';
import React, { useEffect, useState } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Box } from '@mui/material';
import { RestaurantCollection } from '/imports/api/restaurant.collection';
import { SearchForm } from '../components/SearchForm';
import { ResultList } from '../components/ResultList';
import { Loading } from '../components/Loading';
import { NoResults } from '../components/NoResults';
import { filterBySearch, filterByOpenNow } from '../../utils/filterRestaurants';

export const Main = () => {
  const [showingResults, setShowingResults] = useState<Restaurant[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [openNowSearch, setOpenNowSearch] = useState<boolean>(false);

  // Subscription to restaurants collection.
  // if subscription is loading, return empty dataset & isLoading = true,
  // else return restaurants and isLoading = false.
  const { restaurants, isLoading } = useTracker(() => {
    const handler = Meteor.subscribe('restaurants');

    if (!handler.ready()) {
      return { restaurants: [], isLoading: true };
    }

    const restaurants = RestaurantCollection.find({}).fetch();

    return restaurants.length <= 1
      ? { restaurants: [], isLoading: false }
      : { restaurants, isLoading: false };
  });

  // Set showing results to restaurants when subscription handler is ready.
  useEffect(() => {
    !isLoading && setShowingResults(restaurants);
  }, [isLoading]);

  // If Open now-switch is toggled on,
  // set showing results to restaurants that are open now
  // else, set showingResults to current search term.
  useEffect(() => {
    openNowSearch
      ? setShowingResults(filterByOpenNow(showingResults))
      : setShowingResults(filterBySearch(restaurants, searchTerm));
  }, [openNowSearch]);

  /**
   * Set showingResults state to the value in event's current target.
   * @function searchRestaurants
   * @param {React.ChangeEvent} event
   * @returns void
   *  */
  const searchRestaurants = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value } = event.currentTarget;
    setSearchTerm(value);

    const searchResults = filterBySearch(restaurants, value);
    setShowingResults(searchResults);
  };

  return (
    <Box data-cy="main" className="flex-col flex gap-3 md:gap-8">
      <Box className="px-4">
        <SearchForm
          openNow={openNowSearch}
          setOpenNow={setOpenNowSearch}
          input={searchTerm}
          handleChange={searchRestaurants}
        />
      </Box>
      {isLoading ? (
        <Loading />
      ) : (
        (showingResults.length === 0 && <NoResults />) || (
          <ResultList results={showingResults} />
        )
      )}
    </Box>
  );
};
