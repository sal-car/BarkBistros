import React from 'react';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ErrorBoundary } from 'react-error-boundary';
import Header from './components/Header';
import Main from './containers/Main';

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

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ErrorBoundary
        fallback={(
          <div className="self-center justify-self-center">
            Something went wrong
          </div>
        )}
      >
        <Header />
        <Main />
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
