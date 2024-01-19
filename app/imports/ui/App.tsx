import React from 'react';
import { ViewRestaurants } from './containers/ViewRestaurants';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FAFAFB',
    },
  },
});

export const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <div className="App  ">
      <ViewRestaurants />
    </div>
  </ThemeProvider>
);
