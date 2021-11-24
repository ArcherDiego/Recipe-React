import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import theme from './theme'
import { GlobalStorage } from './components/Context/GlobalContext'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStorage>
      <ThemeProvider theme={ theme }>
        <App />
      </ThemeProvider>
    </GlobalStorage>
  </React.StrictMode>,
  document.getElementById('root')
);