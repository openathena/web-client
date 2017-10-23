import React from 'react';

export default class ListTeamsView extends React.Component {
  render() {
    const { teamLobby } = this.props;
    return (
      <div>
        <h5>Teams</h5>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Id</th>
            </tr>
          </thead>
          <tbody>
            {teamLobby.teams && teamLobby.teams.map((team) => (
              <tr key={Math.random()}>
                <td>
                  {team.data.name}
                </td>
                <td>
                  {team.data.id}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
};
