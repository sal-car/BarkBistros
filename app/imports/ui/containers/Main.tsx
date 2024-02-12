/* eslint-disable no-alert */
import { Meteor } from 'meteor/meteor';
import React, { useEffect, useState } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Box } from '@mui/material';
import RestaurantCollection from '/imports/api/restaurant.collection';
import { filterBySearch, filterByOpenNow } from '../../utils/filterRestaurants';
import SearchForm from '../components/SearchForm';
import Loading from '../components/Loading';
import NoResults from '../components/NoResults';
import Results from './Results';

function Main(): React.JSX.Element {
  const [showingResults, setShowingResults] = useState<Restaurant[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [openNowSearch, setOpenNowSearch] = useState<boolean>(false);
  const [gridView, setGridView] = useState<boolean>(false);

  // Subscription to restaurants collection.
  type Data = {
    restaurants: Restaurant[],
    isLoading: boolean
  }

  const { restaurants, isLoading } = useTracker<{
    restaurants: Restaurant[], isLoading: boolean
  }>(
    ():Data => {
      const handler = Meteor.subscribe('restaurants', {
        onStop: (error: Error): Data | void => {
          if (error) {
            console.error(`Error in restaurant subscription: ${error}`);
            return { restaurants: [], isLoading: false };
          }
        },
      });

      if (!handler.ready()) {
        return { restaurants: [], isLoading: true };
      }

      const data = RestaurantCollection.find({}).fetch();

      return data.length <= 1
        ? { restaurants: [], isLoading: false }
        : { restaurants: data, isLoading: false };
    },
  );

  // If Open now-switch is toggled on,
  // set showing results to restaurants that are open now
  // else, set showingResults to current search term or full list.
  useEffect(() => {
    const updateResults = () => {
      if (openNowSearch) {
        setShowingResults(filterByOpenNow(showingResults));
      } else if (searchTerm !== '') {
        setShowingResults(filterBySearch(restaurants, searchTerm));
      } else {
        setShowingResults(restaurants);
      }
    };

    if (!isLoading) updateResults();
  }, [isLoading, openNowSearch]);

  /**
   * Sets showing results to current search term.
   * @function setResultsBySearch
   * @param {React.FormEvent<HTMLFormElement>} event
   * @returns void
   *  */
  const setResultsBySearch = () => {
    if (searchTerm === '') {
      setShowingResults(restaurants);
      return;
    }

    Meteor.call(
      'restaurants.search',
      {
        searchTerm,
      },
      (err: Meteor.Error | undefined, res: Restaurant[] | undefined) => {
        if (err) {
          alert('An error ocurred when searching');
          console.error(err.reason);
        } else if (res) setShowingResults(res);
      },
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
}

export default Main;
