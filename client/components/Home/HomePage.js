import React from 'react';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h1>Homepage</h1>
        <p>My hope page...</p>
        <div className="alert alert-success" role="alert">
          <strong>Well done!</strong> You successfully read this important alert message.
        </div>
      </div>
    )
  }
}

export default HomePage;
