import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Auth from './modules/Auth';

import LoginPage from './containers/Auth/LoginPage';
import SignupPage from './containers/Auth/SignupPage';

import HomePage from './components/Home/HomePage';
import AboutPage from './components/About/AboutPage';
import GuardsPage from './components/Guards/GuardsPage';
import SingleGuardPage from './components/Guards/SingleGuardPage';
import AddGuardPage from './components/Guards/AddGuardPage';

import CompanyPage from './components/Company/CompanyPage';

// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/css/bootstrap-theme.css';
import './styles/styles.styl';

export default (
  <Route path='/' getComponent={(location, callback) => {
      if (Auth.isUserAuthenticated()) {
          callback(null, App);
      } else {
          callback(null, LoginPage);
      }
  }}>
    <IndexRoute component={HomePage} />
    <Route path='login' component={LoginPage} />
    <Route path='signup' component={SignupPage} />
    <Route path='logout' onEnter={(nextState, replace) => {
        Auth.deauthenticateUser();
        replace('/'); // change the current URL to /
    }} />
    <Route path='guards' component={GuardsPage} />
    <Route path="/guards/add" component={AddGuardPage} />
    <Route path="/guards/:guardId" component={SingleGuardPage} />
    <Route path='about' component={AboutPage} />
    <Route path='company' component={CompanyPage} />
  </Route>
);
