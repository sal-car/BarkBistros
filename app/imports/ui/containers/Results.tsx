import React from 'react';
import { List, Grid, Box } from '@mui/material';
import ToggleView from '../components/ToggleView';
import GridItem from '../components/GridItem';
import ListItem from '../components/ListItem';
import { getCurrentHourAndDay, isOpen } from '/imports/utils/filterRestaurants';
import { imgMap } from '/db/fixtures';
import FilterOptions from '../components/FilterOptions';

type Props = {
  gridView: boolean;
  setGridView: (arg: boolean) => void;
  results: Restaurant[];
  openNowSearch: boolean;
  setOpenNowSearch: (openNow: boolean) => void;
};

function Results({
  results,
  gridView,
  setGridView,
  openNowSearch,
  setOpenNowSearch,
}: Props): React.JSX.Element {
  /**
   * Checks if the venue is open based on opening hours and system's current time.
   * @function checkIfVenueIsOpen
   * @param {opening_hours} OpeningHours
   * @returns {boolean} true/false
   *  */
  const checkIfVenueIsOpen = (OpeningHours: OpeningHours) => {
    const { day, hour } = getCurrentHourAndDay();
    return isOpen(hour, OpeningHours[day]);
  };

  return (
    <Box data-cy="result-list" className="flex-col flex">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          px: 2,
          pb: 2,
        }}
      >
        <ToggleView
          cardView={gridView}
          onClick={() => setGridView(!gridView)}
        />
        <FilterOptions
          openNowSearch={openNowSearch}
          setOpenNowSearch={setOpenNowSearch}
        />
      </Box>

      {gridView ? (
        <Grid container spacing={3} className="px-3">
          {results.map((item) => (
            <GridItem
              key={item._id}
              name={item.name}
              address={item.address}
              img={imgMap[item.name]}
              tags={item.tags}
            />
          ))}
        </Grid>
      ) : (
        <List>
          {results?.map((item) => (
            <ListItem
              key={item._id}
              open={checkIfVenueIsOpen(item.openingHours)}
              name={item.name}
              address={item.address}
              img={imgMap[item.name]}
              tags={item.tags}
            />
          ))}
        </List>
      )}
    </Box>
  );
}

export default Results;
