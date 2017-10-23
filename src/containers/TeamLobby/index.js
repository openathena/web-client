import React from 'react';
import rpcActions from '../../actions/rpc';
import wsActions from '../../actions/ws';
import CreateTeamForm from './CreateTeamForm';
import AuthTeamForm from './AuthTeamForm';
import ListTeams from './ListTeams';
import StartGame from './StartGame';

function createTeam(newTeam, dispatch) {
  dispatch(rpcActions.createTeam(newTeam));
}

function authTeam(auth, dispatch) {
  dispatch(wsActions.authTeam(auth));
}

function startGame(_, dispatch) {
  dispatch(rpcActions.startGame());
}

export default class TeamLobby extends React.Component {

  render() {
    return (
      <div>
        <h2>Team Lobby</h2>
        <CreateTeamForm onSubmit={createTeam} />
        <AuthTeamForm onSubmit={authTeam} />
        <StartGame onSubmit={startGame} />
        <ListTeams />
      </div>
    );
  }
}
