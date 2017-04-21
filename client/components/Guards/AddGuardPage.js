import React from 'react';
import { Link } from 'react-router';

class AddGuardPage extends React.Component {
  render() {
    const guard = {
      id: '0004',
      firstName: 'Trevor',
      lastName: 'Door',
      level: 1,
      location: 'Adelaide',
      isMale: true
    };

    return (
      <div>
        <h1>Add Guard</h1>
        <form>
          <fieldset>
            <label for="firstName">First name</label>
            <input type="text" placeholder="First name" id="firstName" />
            <label for="lastName">Last name</label>
            <input type="text" placeholder="Last name" id="lastName" />
            <label for="level">Level</label>
            <select id="level">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <label for="location">Location</label>
            <select id="location">
              <option value="Sydney">Sydney</option>
              <option value="Melbourne">Melbourne</option>
              <option value="Brisbane">Brisbane</option>
              <option value="Adelaide">Adelaide</option>
            </select>
          </fieldset>
        </form>
        <button onClick={this.props.addGuard.bind(null, guard)}>Save guard</button>
      </div>
    )
  }
}

export default AddGuardPage;
