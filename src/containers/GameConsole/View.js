import React from 'react';
import ListTeams from '../Shared/ListTeams';

export default class GameConsoleView extends React.Component {
  render() {
    const { game } = this.props;
    return (
      <div>
        <h2>Game Console</h2>
        <ListTeams />
      </div>
    );
  }
};
