import React from 'react';
import { Link } from 'react-router';

class GuardsPage extends React.Component {
  render() {
    const { guards } = this.props;
    return (
      <div>
        <h1>Guards</h1>
        <Link className="btn btn-default" to="/guards/add">Add new guard</Link>
        <table className="table">
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
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        <button className="btn btn-default" onClick={this.props.loadGuards.bind(null)}>Load guards</button>
      </div>
    )
  }
}

export default GuardsPage;
