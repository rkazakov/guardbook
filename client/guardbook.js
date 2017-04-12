import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';

const Main = React.createClass({
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Guardbook</Link>
        </h1>
      </div>
    )
  }
});

render(<Main />, document.getElementById('root'));
