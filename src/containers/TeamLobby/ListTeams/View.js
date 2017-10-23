import React from 'react';

export default class ListTeamsView extends React.Component {
  render() {
    const { currentTeam, teams } = this.props;
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
            {teams && teams.map((team) => (
              <tr key={Math.random()} className={ currentTeam.id === team.id ? 'active' : 'inactive' }>
                <td>
                  {team.name}
                </td>
                <td>
                  {team.id}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
};
