import React from 'react';
import { Link } from 'react-router';

class SingleGuardPage extends React.Component {
  render() {
    const { guards } = this.props;
    const { guardId } = this.props.params;
    const currentGuard = guards.find((guard) => guard.id === guardId);

    console.log(this.props);
    return (
      <div>
        <h1>Single Guard:</h1>
        { currentGuard && currentGuard.firstName }
      </div>
    )
  }
}

export default SingleGuardPage;
