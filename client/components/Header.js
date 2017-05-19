import React from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
  return (
      <nav className="navbar navbar-default">
          <div className="container-fluid">
              <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed"
                          data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                  </button>
                  <IndexLink to="/" className="navbar-brand" activeClassName="active">Guardbook</IndexLink>
              </div>
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul className="nav navbar-nav">
                      <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
                      <li><Link activeClassName="active" to="/guards">Guards</Link></li>
                      <li><Link activeClassName="active" to="/company">Company</Link></li>
                      <li><Link activeClassName="active" to="/about">About</Link></li>
                      <li><Link activeClassName="active" to="/logout">Logout</Link></li>
                  </ul>
              </div>
          </div>
      </nav>
  );
};

export default Header;
