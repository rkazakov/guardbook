import React from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
  return (
    <nav className="header">
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" ᛫ "}
      <Link to="/guards" activeClassName="active">Guards</Link>
      {" ᛫ "}
      <Link to="/about" activeClassName="active">About</Link>
    </nav>
  );
};

export default Header;
