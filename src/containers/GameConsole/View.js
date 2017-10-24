import React from 'react';
import ListTeams from '../Shared/ListTeams';
import AuthTeamForm from '../Shared/AuthTeamForm';
import wsActions from '../../actions/ws';

export default class GameConsoleView extends React.Component {
  render() {
    const { game } = this.props;
    return (
      <div>
        <h2>Game Console</h2>
        <ListTeams />
        <AuthTeamForm onSubmit={wsActions.authTeam} />
      </div>
    );
  }
};
