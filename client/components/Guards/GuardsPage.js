import React from 'react';
import { Link } from 'react-router';

class GuardsPage extends React.Component {
  render() {
    const { guards } = this.props;
    return (
      <div>
        <h1>Guards</h1>
        <p>These are our guards:</p>
        <table class="u-full-width">
          <thead>
            <tr>
              <th>Name</th>
              <th>Level</th>
              <th>Location</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            { guards.map((guard, index) => {
                return (
                  <tr key={guard.id}>
                    <td>
                      <Link to={`/guards/${guard.id}`}>
                        {guard.firstName} {guard.lastName}
                      </Link>
                    </td>
                    <td>{guard.level}</td>
                    <td>{guard.location}</td>
                    <td>{guard.isMale === true ? 'Male' : 'Female'}</td>
                    {/* <button onClick={this.props.increaseLevel.bind(null, index)}>Increase level</button> */}
                    {/* <button onClick={this.props.deleteGuard.bind(null, index)}>Delete</button> */}
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default GuardsPage;
