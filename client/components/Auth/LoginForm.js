import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const LoginForm = ({onSubmit, onChange, errors, successMessage, user}) => (
    <div className="container">
      <form className="form-signin" action="/" onSubmit={onSubmit}>
        <h2 className="form-signin-heading">Please sign in</h2>

        {successMessage && <p className="success-message">{successMessage}</p>}
        {errors.summary && <p className="error-message">{errors.summary}</p>}

        <label htmlFor="inputEmail" className="sr-only">Email address</label>
        <input name="email" type="email" id="inputEmail" className="form-control"
               placeholder="Email address" onChange={onChange} value={user.email} />

        <label htmlFor="inputPassword" className="sr-only">Password</label>
        <input name="password" type="password" id="inputPassword" className="form-control"
               placeholder="Password" onChange={onChange} value={user.password} />

        <div className="checkbox">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>

        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>

        <span>Don't have an account? <Link to={'/signup'}>Create one</Link>.</span>
      </form>
    </div>
);

LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    successMessage: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired
};

export default LoginForm;
