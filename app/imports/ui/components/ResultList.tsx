import React from 'react';
import { ResultItem } from './ResultItem';
import { List } from '@mui/material';

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
];

export const ResultList = () => (
  <List>
    {Restaurants.map((restaurant) => (
      <ResultItem item={restaurant} />
    ))}
  </List>
);
