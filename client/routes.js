import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/Home/HomePage';
import AboutPage from './components/About/AboutPage';
import GuardsPage from './components/Guards/GuardsPage';
import SingleGuardPage from './components/Guards/SingleGuardPage';
import AddGuardPage from './components/Guards/AddGuardPage';

// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/css/bootstrap-theme.css';
import './styles/styles.styl';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={HomePage} />
    <Route path='guards' component={GuardsPage} />
    <Route path="/guards/add" component={AddGuardPage} />
    <Route path="/guards/:guardId" component={SingleGuardPage} />
    <Route path='about' component={AboutPage} />
  </Route>
);
