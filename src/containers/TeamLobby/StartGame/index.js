import React from 'react';
import { reduxForm } from 'redux-form';

const StartGame = (props) => {
  const { handleSubmit, submitting } = props;
  return (
      <form onSubmit={handleSubmit} >
        <div>
          <h4>Ready?</h4>
          <button type="submit" disabled={submitting}>Start Game</button>
        </div>
      </form>
    );
};

export default reduxForm({
  form: 'startGame', // a unique identifier for this form
})(StartGame);
