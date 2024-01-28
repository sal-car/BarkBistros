import { Meteor } from 'meteor/meteor';
import React, { useEffect, useState } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
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
      onStop: (error: Error) => {
        if (error) {
          console.log('Error in restaurant subscription: ', error);
        }
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
  // else, set showingResults to current search term or full list.
  useEffect(() => {
    if (openNowSearch) {
      setShowingResults(filterByOpenNow(showingResults));
    } else if (!openNowSearch && searchTerm != '') {
      setShowingResults(filterBySearch(restaurants, searchTerm));
    } else {
      setShowingResults(restaurants);
    }
  }, [openNowSearch]);

  /**
   * Ses showing results to current search term.
   * @function setResultsBySearch
   * @param {React.FormEvent<HTMLFormElement>} event
   * @returns void
   *  */
  const setResultsBySearch = () => {
    if (!searchTerm) setShowingResults(restaurants);

    Meteor.call(
      'restarants.search',
      {
        searchTerm: searchTerm,
      },
      (err: any, res: any) => {
        if (err) alert(err.reason);
        else res && setShowingResults(res);
      }
    );
  };

  return (
    <Box
      data-cy="main"
      sx={{
        px: { md: '5%' },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <SearchForm
        input={searchTerm}
        setInput={setSearchTerm}
        setResultsBySearch={setResultsBySearch}
      />
      {isLoading ? (
        <Loading />
      ) : (
        (showingResults.length === 0 && <NoResults />) || (
          <Results
            openNowSearch={openNowSearch}
            setOpenNowSearch={setOpenNowSearch}
            gridView={gridView}
            setGridView={setGridView}
            results={showingResults}
          />
        )
      )}
    </Box>
  );
};
