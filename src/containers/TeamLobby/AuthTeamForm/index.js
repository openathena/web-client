import React from 'react';
import { Field, reduxForm } from 'redux-form';

const AuthTeamForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <h3>Login</h3>
      <div>
        <label>Team ID</label>
        <div>
          <Field
            name="username"
            component="input"
            type="text"
            placeholder="Team ID"
          />
        </div>
      </div>
      <div>
        <label>Password</label>
        <div>
          <Field
            name="password"
            component="input"
            type="text"
            placeholder="Password"
          />
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
      </form>
    );
};

export default reduxForm({
  form: 'authTeam', // a unique identifier for this form
})(AuthTeamForm);
