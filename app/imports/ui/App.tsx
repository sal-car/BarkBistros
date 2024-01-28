import React from 'react';
import { Main } from './containers/Main';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Header } from './components/Header';
import { ErrorBoundary } from 'react-error-boundary';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FAFAFB',
    },
    secondary: {
      main: '#3A8D5C',
      light: '#FAFAFB',
      dark: '#3A8D5C',
    },
  },
});

export const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <ErrorBoundary
      fallback={
        <div className="self-center justify-self-center">
          Something went wrong
        </div>
      }
    >
      <Header />
      <Main />
    </ErrorBoundary>
  </ThemeProvider>
);
