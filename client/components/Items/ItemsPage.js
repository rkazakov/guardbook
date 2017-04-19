import React from 'react';
import { Link } from 'react-router';

class ItemsPage extends React.Component {
  render() {
    const { items } = this.props;
    return (
      <div>
        <h1>Items</h1>
        <p>This is items page...</p>
        <button onClick={this.props.increment.bind(null, items)}>{items}</button>
      </div>
    )
  }
}

export default ItemsPage;
