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
        <center>
          <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRbezqZpEuwGSvitKy3wrwnth5kysKdRqBW54cAszm_wiutku3R"
               name="aboutme" width="140" height="140" className="img-circle" />
          <h3 className="media-heading">Joe Sixpack <small>USA</small></h3>
          <span><strong>Skills: </strong></span>
          <span className="label label-warning">HTML5/CSS</span>
          <span className="label label-info">Adobe CS 5.5</span>
          <span className="label label-info">Microsoft Office</span>
          <span className="label label-success">Windows XP, Vista, 7</span>
        </center>
        <hr />
        <center>
          <p className="text-left"><strong>Bio: </strong>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sem dui, tempor sit amet commodo a, vulputate vel tellus.
          </p>
        </center>
      </div>
    )
  }
}

export default SingleGuardPage;
