import React from 'react';
import { Link } from 'react-router';

class SingleGuardPage extends React.Component {
  render() {
    const { guards } = this.props;
    const { guardId } = this.props.params;
    const currentGuard = guards.find((guard) => guard.id === guardId);

    return (
      <div>
        <h1>Single Guard:</h1>
        <div>{ currentGuard && currentGuard.firstName }</div>
        <button onClick={this.props.deleteGuard.bind(null, guardId)}>Delete</button>
      </div>
    )
  }
}

export default SingleGuardPage;
