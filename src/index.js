import React from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import theme from './assets/theme'
import App from '@/App';
import 'css/index.css'
import 'normalize.css'
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <ThemeProvider theme={theme}>
          <HashRouter>
            <App />
          </HashRouter>
        </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

