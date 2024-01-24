import { Meteor } from 'meteor/meteor';
import React, { useEffect, useState } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { ErrorBoundary } from 'react-error-boundary';
import { Box } from '@mui/material';
import { RestaurantCollection } from '/imports/api/restaurant.collection';
import { filterBySearch, filterByOpenNow } from '../../utils/filterRestaurants';
import { SearchForm } from '../components/SearchForm';
import { Loading } from '../components/Loading';
import { NoResults } from '../components/NoResults';
import { Results } from './Results';

export const Main = () => {
  const [showingResults, setShowingResults] = useState<Restaurant[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [openNowSearch, setOpenNowSearch] = useState<boolean>(false);
  const [gridView, setGridView] = useState(false);

  // Subscription to restaurants collection.
  const { restaurants, isLoading } = useTracker(() => {
    const handler = Meteor.subscribe('restaurants', {
      onStop: (error: any) => {
        console.log('Error in restaurant subscription: ', error);
      },
    });

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
    restaurants.length > 0 && openNowSearch
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
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
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
            <Results
              gridView={gridView}
              setGridView={setGridView}
              results={showingResults}
            />
          )
        )}
      </Box>
    </ErrorBoundary>
  );
};
