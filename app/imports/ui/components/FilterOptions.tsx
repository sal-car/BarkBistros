import React from 'react';
import { Switch, FormControlLabel } from '@mui/material';

type Props = {
  openNowSearch: boolean;
  setOpenNowSearch: (openNow: boolean) => void;
};
export const FilterOptions = ({ openNowSearch, setOpenNowSearch }: Props) => (
  <FormControlLabel
    control={
      <Switch
        onChange={() => setOpenNowSearch(!openNowSearch)}
        color="success"
      ></Switch>
    }
    label="Open now"
    labelPlacement="start"
  />
);
