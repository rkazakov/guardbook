import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Link, IndexLink} from 'react-router';

const Header = () => {
  return (
    <div>
        <MuiThemeProvider>
            <AppBar
              title="Guardbook"
              iconElementRight={
                <FlatButton label="Guards" />
              }
            />
        </MuiThemeProvider>
        <nav className="header">
          <IndexLink to="/" activeClassName="active">Home</IndexLink>
          {" ᛫ "}
          <Link to="/guards" activeClassName="active">Guards</Link>
          {" ᛫ "}
          <Link to="/about" activeClassName="active">About</Link>
        </nav>
    </div>
  );
};

export default Header;
