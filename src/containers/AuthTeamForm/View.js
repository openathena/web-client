import React from 'react';
import { Control, Form } from 'react-redux-form';

// TODO use redux-form instead

export default class AuthTeamForm extends React.Component {
  handleSubmit(team) {
    this.props.authTeam(team);
  }

  render() {
    return (
      <Form model="team" onSubmit={(team) => this.handleSubmit(team)}>
        <h3>Auth for a Team!</h3>
        <label>Team ID:</label>
        <Control.text model=".username" />
        <label>Password:</label>
        <Control.text model=".password" />
        <button>Submit!</button>
      </Form>
    );
  }
}
