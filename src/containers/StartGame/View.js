import React from 'react';
import { Form } from 'react-redux-form';

// TODO use redux-form instead

export default class StartGame extends React.Component {
  handleSubmit() {
    this.props.startGame();
  }

  render() {
    return (
      <Form model="team" onSubmit={ () => this.handleSubmit() }>
        <h3>Ready?</h3>
        <button>Start Game!</button>
      </Form>
    );
  }
}
