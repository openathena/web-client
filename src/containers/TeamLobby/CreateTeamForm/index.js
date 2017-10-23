import React from 'react';
import { Field, reduxForm } from 'redux-form';

const CreateTeamForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <h3>Create a Team</h3>
      <div>
        <label>Team Name</label>
        <div>
          <Field
            name="name"
            component="input"
            type="text"
            placeholder="Team Name"
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
  form: 'createTeam', // a unique identifier for this form
})(CreateTeamForm);
