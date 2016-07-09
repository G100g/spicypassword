import React from 'react';
import { render } from 'react-dom';

// This wire store to root components tree
import { Provider } from 'react-redux';

import store from './client/store';
import AppContainer from './client/components/AppContainer';

import 'normalize.css';
import './client/styles/base.scss';

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,

  document.getElementById('root')
);
