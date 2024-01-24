import React from 'react';
import { List, Grid, Box } from '@mui/material';
import { ToggleView } from '../components/ToggleView';
import { GridItem } from '../components/GridItem';
import { ListItem } from '../components/ListItem';
import { getCurrentHourAndDay, isOpen } from '/imports/utils/filterRestaurants';
import { imgMap } from '/db/fixtures';

type Props = {
  gridView: boolean;
  setGridView: (arg: boolean) => void;
  results: Restaurant[];
};

export const Results = ({ results, gridView, setGridView }: Props) => {
  /**
   * Checks if the venue is open based on opening hours and system's current time.
   * @function checkIfVenueIsOpen
   * @param {opening_hours} OpeningHours
   * @returns {boolean} true/false
   *  */
  const checkIfVenueIsOpen = (opening_hours: OpeningHours) => {
    const { day, hour } = getCurrentHourAndDay();
    return isOpen(hour, opening_hours[day]);
  };

  return (
    <Box data-cy="result-list" className="flex-col flex">
      <ToggleView
        className="self-end md:mx-8 "
        cardView={gridView}
        onClick={() => setGridView(!gridView)}
      />

      {gridView ? (
        <Grid container spacing={3} className="px-3">
          {results.map((item, index) => (
            <GridItem
              key={index}
              name={item.name}
              address={item.address}
              img={imgMap[item.name]}
              tags={item.tags}
            />
          ))}
        </Grid>
      ) : (
        <List>
          {results.map((item, index) => (
            <ListItem
              key={index}
              open={checkIfVenueIsOpen(item.opening_hours)}
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
};
