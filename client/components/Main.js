import React from 'react';
// import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';

class Main extends React.Component {
  render() {
    return (
      <div>
        <Header />
        {React.cloneElement({...this.props}.children, {...this.props})}
        <Footer />
      </div>
    )
  }
}
// Main.propTypes = {
//   children: PropTypes.object.isRequred
// };

export default Main;
