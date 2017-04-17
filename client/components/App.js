import React, {PropTypes} from 'react';
import Header from './Header';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <p>Footer</p>
      </div>
    )
  }
};

App.propTypes = {
  children: PropTypes.object.isRequred
};

export default App;
