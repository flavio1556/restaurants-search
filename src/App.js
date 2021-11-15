import React from 'react';
import { Provider } from 'react-redux';
import Theme from './theme';
import Home from './pages/Home/index';
import { ThemeProvider } from 'styled-components';
import {Reset} from 'styled-reset';
import store  from './redux/store';
function App() {
  return (
              <div>
                <Provider store={store}>
                  <ThemeProvider theme={Theme}>
                        <Reset />
                        <Home />
                   </ThemeProvider>
                </Provider>

              </div>
  );
}

export default App;
