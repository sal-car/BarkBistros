import React, { useState } from 'react';
import { ResultItem } from './ResultItem';
import { List, Grid } from '@mui/material';
import { ViewButton } from './ViewButton';

const Restaurants = [
  {
    id: 0,
    name: 'YummyFoods',
    address: 'Carrer de la Boquería',
    tags: ['Italian', 'café'],
  },
  {
    id: 0,
    name: 'CoffeeWorld',
    address: 'Carrer de la Santi',
    tags: ['Greek', 'restaurant'],
  },
  {
    id: 0,
    name: 'Starbucks',
    address: 'Carrer de Cataluña',
    tags: ['Swedish', 'café'],
  },
  {
    id: 0,
    name: 'Starbucks',
    address: 'Carrer de Cataluña',
    tags: ['Swedish', 'café'],
  },
  {
    id: 0,
    name: 'Starbucks',
    address: 'Carrer de Cataluña, Barcelona Spain Worlwide',
    tags: ['Swedish', 'café'],
  },
  {
    id: 0,
    name: 'Starbucks',
    address: 'Carrer de Cataluña',
    tags: ['Swedish', 'café'],
  },
  {
    id: 0,
    name: 'Starbucks',
    address: 'Carrer de Cataluña',
    tags: ['Swedish', 'café'],
  },
  {
    id: 0,
    name: 'Starbucks',
    address: 'Carrer de Cataluña, Barcelona',
    tags: ['Swedish', 'café'],
  },
  {
    id: 0,
    name: 'Starbucks',
    address: 'Carrer de Cataluña',
    tags: ['Swedish', 'café'],
  },
  {
    id: 0,
    name: 'Starbucks',
    address: 'Carrer de Cataluña',
    tags: ['Swedish', 'café'],
  },
];

export const ResultList = () => {
  const [cardView, setCardView] = useState(false);
  return (
    <div className="flex-col flex">
      <ViewButton
        className="self-end md:mx-8 "
        cardView={cardView}
        onClick={() => setCardView(!cardView)}
      />

      {(cardView && (
        <Grid container spacing={3} className="px-3">
          {Restaurants.map((restaurant) => (
            <ResultItem cardView={cardView} item={restaurant} />
          ))}
        </Grid>
      )) || (
        <List>
          {Restaurants.map((restaurant) => (
            <ResultItem cardView={cardView} item={restaurant} />
          ))}
        </List>
      )}
    </div>
  );
};
