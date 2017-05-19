import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';

const SignupForm = ({onSubmit, onChange, errors, user,}) => (
    <div className="container">
        <form className="form-signin" action="/" onSubmit={onSubmit}>
            <h2 className="form-signin-heading">Sign up</h2>

            {errors.summary && <p className="error-message">{errors.summary}</p>}

            <label htmlFor="inputName" className="sr-only">Name</label>
            <input name="name" type="text" id="inputName" className="form-control"
                   placeholder="Name" onChange={onChange} value={user.name}/>

            <label htmlFor="inputEmail" className="sr-only">Email address</label>
            <input name="email" type="email" id="inputEmail" className="form-control"
                   placeholder="Email address" onChange={onChange} value={user.email}/>

            <label htmlFor="inputPassword" className="sr-only">Password</label>
            <input name="password" type="password" id="inputPassword" className="form-control"
                   placeholder="Password" onChange={onChange} value={user.password}/>

            <button className="btn btn-lg btn-primary btn-block" type="submit">Create new account</button>

            <span>Already have an account? <Link to={'/login'}>Log in</Link>.</span>
        </form>
    </div>
);

SignupForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
};

export default SignupForm;
