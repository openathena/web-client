import React, { Component } from 'react';
import { Provider } from 'react-redux';
import RawEvents from './containers/RawEvents';
import CreateTeamForm from './containers/CreateTeamForm';
import AuthTeamForm from './containers/AuthTeamForm';
import StartGame from './containers/StartGame';

class App extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <div>
          <CreateTeamForm />
          <AuthTeamForm />
          <StartGame />
          <RawEvents />
        </div>
      </Provider>
    );
  }
}

export default App;
