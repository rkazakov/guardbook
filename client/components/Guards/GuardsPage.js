import React from 'react';
import { Link } from 'react-router';

class GuardsPage extends React.Component {
  render() {
    const { guards } = this.props;
    return (
      <div>
        <h1>Guards</h1>
        <p>These are our guards:</p>
        <ul>
          { guards.map((guard, index) => {
              return (
                <li key={guard.id}>
                  {guard.firstName} - {guard.lastName} - {guard.level}
                  <button onClick={this.props.incrementLevel.bind(null, index)}>Increment level</button>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default GuardsPage;
