import React from 'react';
import {
  TextField,
  Switch,
  FormControlLabel,
  Typography,
  Box,
} from '@mui/material';

type Props = {
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  input: string;
  openNow: boolean;
  setOpenNow: (arg: boolean) => void;
};

export const SearchForm = ({
  handleChange,
  input,
  openNow,
  setOpenNow,
}: Props) => (
  <form className="flex gap-5 justify-between md:justify-around">
    <Box className="self-start min-w-[40vw] sm:min-w-[60vw] md:min-w-[75vw]">
      <TextField
        value={input}
        onChange={(e) => handleChange(e)}
        label="Name or keyword"
        type="text"
        variant="standard"
        color="primary"
        fullWidth
      />
    </Box>
    <FormControlLabel
      onChange={() => setOpenNow(!openNow)}
      className="self-end min-w-2"
      control={<Switch color="success" name="open-now" />}
      label={<Typography className="min-w-fit">Open now</Typography>}
    />
  </form>
);
