import React from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
  return (
      <nav className="navbar navbar-default">
          <div className="container-fluid">
              <div className="navbar-header">
                  <IndexLink to="/" className="navbar-brand" activeClassName="active">Guardbook</IndexLink>
              </div>
              <div className="collapse navbar-collapse">
                  <ul className="nav navbar-nav">
                      <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
                      <li><Link activeClassName="active" to="/guards">Guards</Link></li>
                      <li><Link activeClassName="active" to="/about">About</Link></li>
                  </ul>
              </div>
          </div>
      </nav>
  );
};

export default Header;
