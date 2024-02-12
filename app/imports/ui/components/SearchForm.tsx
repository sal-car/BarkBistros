import React from 'react';
import { TextField, FormControl, Button } from '@mui/material';

type Props = {
  setResultsBySearch: () => void;
  input: string;
  setInput: (e: string) => void;
};

function SearchForm({
  setResultsBySearch,
  input,
  setInput,
}: Props): React.JSX.Element {
  return (
    <FormControl
      sx={{
        flexDirection: 'row',
        gap: 5,
        width: '100%',
        px: '5%',
        mb: 5,
      }}
      data-cy="search-form"
    >
      <TextField
        sx={{ width: '100%' }}
        data-cy="search-input"
        value={input}
        onChange={(e) => setInput(e.currentTarget.value)}
        label="Name or keyword"
        type="text"
        variant="standard"
        color="primary"
        onKeyDown={(e) => e.key === 'Enter' && setResultsBySearch()}
        fullWidth
      />
      <Button
        data-cy="search-button"
        variant="contained"
        sx={{
          alignSelf: 'end',
          width: { xs: '40%', sm: '40%' },
          maxWidth: { xs: '40%', sm: 100 },
        }}
        color="secondary"
        onClick={() => setResultsBySearch()}
      >
        Search
      </Button>
    </FormControl>
  );
}

export default SearchForm;
