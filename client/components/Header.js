import React from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
  return (
      <nav className="navbar navbar-default">
          <div className="container-fluid">
              <div className="navbar-header">
                  <a className="navbar-brand" href="/">Guardbook</a>
              </div>

              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul className="nav navbar-nav">
                      <li activeclassName="active"><IndexLink to="/">Home</IndexLink></li>
                      <li activeclassName="active"><Link activeclassName="active" to="/guards">Guards</Link></li>
                      <li activeclassName="active"><Link activeclassName="active" to="/about">About</Link></li>
                  </ul>
              </div>
          </div>
      </nav>
  );
};

export default Header;
