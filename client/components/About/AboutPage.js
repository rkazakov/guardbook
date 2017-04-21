import React from 'react';
import { Link } from 'react-router';

class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <p>This is about page...</p>
        <blockquote>
          <p><em>Yeah!! Milligram is amazing.</em></p>
        </blockquote>
      </div>
    )
  }
}

export default AboutPage;
