import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/Home/HomePage';
import AboutPage from './components/About/AboutPage';
import GuardsPage from './components/Guards/GuardsPage';

import '../node_modules/milligram/dist/milligram.min.css';
import './styles/styles.styl';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={HomePage} />
    <Route path='guards' component={GuardsPage} />
    <Route path='about' component={AboutPage} />
  </Route>
);
