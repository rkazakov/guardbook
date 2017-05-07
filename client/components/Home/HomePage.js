import React from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component {
    render() {
        const {guards} = this.props;
        return (
            <div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Latest guards</h3>
                    </div>
                    <div className="panel-body">
                        <ul className="list">
                        {guards.map(guard => {
                            return (
                                <li className="skill">
                                    <Link to={`/guards/${guard.id}`}>
                                        <img src={guard.imageUrl}
                                             name="aboutme" width="100" height="100" className="img-circle"/>
                                    </Link>
                                </li>
                            )
                        })}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;
