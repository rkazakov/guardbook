import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';
import routes from './routes';
import store from './store';

const router = (
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
);

injectTapEventPlugin();

render(router, document.getElementById('root'));
