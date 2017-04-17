import React, {PropTypes} from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <p>Header</p>
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
