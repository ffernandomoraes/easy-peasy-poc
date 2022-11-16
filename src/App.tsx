import '@eduzz/houston-ui/ThemeProvider/theme.css';
import '@eduzz/houston-ui/ThemeProvider/theme-without-reset.css';
import { BrowserRouter } from 'react-router-dom';

import { StoreProvider } from 'easy-peasy';

import ThemeProvider, { createTheme } from '@eduzz/houston-ui/ThemeProvider';

import Routes from './routes';
import store from './store';

const theme = createTheme('eduzz');

function App() {
  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ThemeProvider>
    </StoreProvider>
  );
}

export default App;
