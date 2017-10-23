import React, { Component } from 'react';
import { Provider } from 'react-redux';
import GameClientEvents from './containers/GameClientEvents';
import TeamLobby from './containers/TeamLobby';
import GameConsole from './containers/GameConsole';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import history from './configureHistory';

class App extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <div>
          <ConnectedRouter history={history}>
            <div>
              <Route path="/lobby" component={TeamLobby}/>
              <Route path="/game" component={GameConsole}/>
            </div>
          </ConnectedRouter>
          <GameClientEvents />
        </div>
      </Provider>
    );
  }
}

export default App;
