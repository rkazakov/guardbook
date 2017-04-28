import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h1>Homepage</h1>
        <p>My hope page...</p>
        <MuiThemeProvider>
            <RaisedButton label="Default" />
        </MuiThemeProvider>
      </div>
    )
  }
}

export default HomePage;
