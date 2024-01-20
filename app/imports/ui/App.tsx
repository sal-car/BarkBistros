import React from 'react';
import { Main } from './containers/Main';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Header } from './containers/Header';

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
    <Header />
    <Main />
  </ThemeProvider>
);
