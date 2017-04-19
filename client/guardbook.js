import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import routes from './routes';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
)

render(router, document.getElementById('root'));
