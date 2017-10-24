import React from 'react';
import rpcActions from '../../actions/rpc';
import wsActions from '../../actions/ws';
import ListTeams from '../Shared/ListTeams';
import AuthTeamForm from '../Shared/AuthTeamForm';
import CreateTeamForm from './CreateTeamForm';
import StartGame from './StartGame';

export default class TeamLobby extends React.Component {

  render() {
    return (
      <div>
        <h2>Team Lobby</h2>
        <CreateTeamForm onSubmit={rpcActions.createTeam} />
        <AuthTeamForm onSubmit={wsActions.authTeam} />
        <StartGame onSubmit={rpcActions.startGame} />
        <ListTeams />
      </div>
    );
  }
}
