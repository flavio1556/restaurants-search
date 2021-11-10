import React from 'react';
import Theme from './theme';
import Home from './pages/Home/index';
import { ThemeProvider } from 'styled-components';
import {Reset} from 'styled-reset';
import reset from 'styled-reset';

function App() {
  return (
              <div>      
                  <ThemeProvider theme={Theme}>
                      <Reset />
                      <Home />
                  </ThemeProvider>  
              </div>
  );
}

export default App;
