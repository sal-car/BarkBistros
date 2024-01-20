import React from 'react';
import { SearchForm } from '../components/SearchForm';
import { ResultList } from '../components/ResultList';

export const Main = () => (
  <div className="flex-col flex gap-3 md:gap-8">
    <div className="px-4">
      <SearchForm />
    </div>
    <ResultList />
  </div>
);
