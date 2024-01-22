import React, { useState } from 'react';
import { List, Grid, Box } from '@mui/material';
import { ResultItem } from './ResultItem';
import { ViewButton } from './ViewButton';

type Props = {
  results: Restaurant[];
};

export const ResultList = ({ results }: Props) => {
  const [cardView, setCardView] = useState(false);

  return (
    <Box className="flex-col flex">
      <ViewButton
        className="self-end md:mx-8 "
        cardView={cardView}
        onClick={() => setCardView(!cardView)}
      />

      {(cardView && (
        <Grid container spacing={3} className="px-3">
          {results.map((restaurant) => (
            <ResultItem cardView={cardView} item={restaurant} />
          ))}
        </Grid>
      )) || (
        <List>
          {results.map((restaurant) => (
            <ResultItem cardView={cardView} item={restaurant} />
          ))}
        </List>
      )}
    </Box>
  );
};
