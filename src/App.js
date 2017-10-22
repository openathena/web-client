import React, { Component } from 'react';
import { Provider } from 'react-redux';
import GameClientEvents from './containers/GameClientEvents';
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
          <GameClientEvents />
        </div>
      </Provider>
    );
  }
}

export default App;
