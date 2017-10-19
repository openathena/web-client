import React from 'react';
import { Control, Form } from 'react-redux-form';

// TODO use redux-form instead

export default class CreateTeamForm extends React.Component {
  handleSubmit(team) {
    this.props.createTeam(team);
  }

  render() {
    return (
      <Form model="team" onSubmit={(team) => this.handleSubmit(team)}>
        <h3>Create a Team!</h3>
        <label>Team Name:</label>
        <Control.text model=".name" />
        <label>Password:</label>
        <Control.text model=".password" />
        <button>Submit!</button>
      </Form>
    );
  }
}
