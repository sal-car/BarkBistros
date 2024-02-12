import React from 'react';
import { Switch, FormControlLabel } from '@mui/material';

type Props = {
  openNowSearch: boolean;
  setOpenNowSearch: (openNow: boolean) => void;
};
function FilterOptions({
  openNowSearch,
  setOpenNowSearch,
}: Props): React.JSX.Element {
  return (
    <FormControlLabel
      control={(
        <Switch
          onChange={() => setOpenNowSearch(!openNowSearch)}
          color="success"
        />
      )}
      label="Open now"
      labelPlacement="start"
    />
  );
}

export default FilterOptions;
