import React from 'react';
import { TextField, Switch, FormControlLabel, Typography } from '@mui/material';

export const SearchForm = () => (
  <form className="flex gap-5 justify-between md:justify-around">
    <div className="self-start min-w-[40vw] sm:min-w-[60vw] md:min-w-[75vw]">
      <TextField
        label="Name or keyword"
        type="text"
        variant="standard"
        color="primary"
        fullWidth
      />
    </div>
    <FormControlLabel
      className="self-end min-w-2"
      control={<Switch name="open-now" />}
      label={<Typography className="min-w-fit">Open now</Typography>}
    />
  </form>
);
