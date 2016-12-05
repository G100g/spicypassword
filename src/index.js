import React from 'react';
import { render } from 'react-dom';

// This wire store to root components tree
import { Provider } from 'react-redux';

import store from './store';
import AppContainer from './components/AppContainer';

import 'normalize.css';
import './styles/base.css';

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,

  document.getElementById('root')
);
