import React from 'react';
import {Link} from 'react-router';

class AddGuardPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      guard: {
        id: Math.floor(Math.random() * 10000).toString(),
        firstName: '',
        lastName: '',
        level: 1,
        location: '',
        isMale: null
      }
    };

    this.onFirstNameChange = this.onFirstNameChange.bind(this);
    this.onLastNameChange = this.onLastNameChange.bind(this);
    this.onLevelChange = this.onLevelChange.bind(this);
    this.onLocationChange = this.onLocationChange.bind(this);
  }

  onFirstNameChange(event) {
    const firstName = event.target.value;
    const guard = this.state.guard;
    this.setState({
      guard: {
        ...guard,
        firstName
      }
    });
  }

  onLastNameChange(event) {
    const lastName = event.target.value;
    const guard = this.state.guard;
    this.setState({
      guard: {
        ...guard,
        lastName
      }
    });
  }

  onLevelChange(event) {
    const level = event.target.value;
    const guard = this.state.guard;
    this.setState({
      guard: {
        ...guard,
        level
      }
    });
  }

  onLocationChange(event) {
    const location = event.target.value;
    const guard = this.state.guard;
    this.setState({
      guard: {
        ...guard,
        location
      }
    });
  }

  render() {
    const guard = this.state.guard;

    return (
      <div>
        <form>
          <fieldset>
            <label htmlFor="firstName">First name</label>
            <input type="text" className="form-control" placeholder="First name" id="firstName"
              onChange={this.onFirstNameChange} value={this.state.guard.firstName}/>
            <label htmlFor="lastName">Last name</label>
            <input type="text" className="form-control" placeholder="Last name" id="lastName"
              onChange={this.onLastNameChange} value={this.state.guard.lastName}/>
            <label htmlFor="level">Level</label>
            <select id="level" className="form-control" onChange={this.onLevelChange}
              value={this.state.guard.level}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <label htmlFor="location">Location</label>
            <select id="location" className="form-control" onChange={this.onLocationChange}
              value={this.state.guard.location}>
              <option value="Sydney">Sydney</option>
              <option value="Melbourne">Melbourne</option>
              <option value="Brisbane">Brisbane</option>
              <option value="Adelaide">Adelaide</option>
            </select>
          </fieldset>
        </form>
        <button type="button" className="btn btn-default"
                onClick={this.props.addGuard.bind(null, guard)}>Save guard</button>
      </div>
    )
  }
}

export default AddGuardPage;
