import React from 'react';
import { SearchForm } from '../components/SearchForm';
import { ResultList } from '../components/ResultList';

export const ViewRestaurants = () => (
  <div className="pt-5">
    <SearchForm />
    <ResultList />
  </div>
);
