import React from 'react';
import {Link} from 'react-router';

class SingleGuardPage extends React.Component {
    render() {
        const {guards} = this.props;
        const {guardId} = this.props.params;
        const currentGuard = guards.find((guard) => guard.id === guardId);

        return (
            <div>
                <button onClick={this.props.deleteGuard.bind(null, guardId)}>Delete</button>
                <center>
                    <img src={currentGuard.imageUrl}
                         name="aboutme" width="140" height="140" className="img-circle"/>
                    <h3 className="media-heading">
                        {currentGuard.firstName} {currentGuard.lastName}
                        <small>{currentGuard.location}</small>
                    </h3>
                    <span><strong>Skills: </strong></span>
                    {currentGuard.licences.map((licence, index) => {
                        return (
                            <span key={index} className="skill label label-warning">{licence}</span>
                        )
                    })}
                </center>
                <hr />
                <center>
                    <p className="text-left"><strong>Bio: </strong>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sem dui, tempor sit amet commodo a,
                        vulputate vel tellus.
                    </p>
                </center>
            </div>
        )
    }
}

export default SingleGuardPage;
