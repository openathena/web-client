import React, { Component } from 'react';
import { Provider } from 'react-redux';
import GameClientEvents from './containers/GameClientEvents';
import TeamLobby from './containers/TeamLobby';

class App extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <div>
          <TeamLobby />
          <GameClientEvents />
        </div>
      </Provider>
    );
  }
}

export default App;
