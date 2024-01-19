import React from 'react';
import { TextField, Switch, FormControlLabel } from '@mui/material';

export const SearchForm = () => (
  <form className="flex flex-col gap-5 items-center">
    <div className="w-[80vw]">
      <TextField
        label="Name or keyword"
        type="text"
        variant="standard"
        color="primary"
        fullWidth
      />
    </div>
    <FormControlLabel control={<Switch name="open-now" />} label="Open now" />{' '}
  </form>
);
