import React, { PropTypes } from 'react';
import Header from './Header';

class Main extends React.Component {
  render() {
    return (
      <div>
        <Header />
        {React.cloneElement({...this.props}.children, {...this.props})}
        <p>Footer</p>
      </div>
    )
  }
};

// Main.propTypes = {
//   children: PropTypes.object.isRequred
// };

export default Main;
