import React from 'react';

export default class GameClientEventsView extends React.Component {
  render() {
    const { gameClientEvents } = this.props;
    return (
      <div>
        <h1>Game Client Events (RPC requests/responses, Game Events)</h1>
        {gameClientEvents && gameClientEvents.map((event) => (<div key={Math.random()}>{JSON.stringify(event, null, '  ')}</div>))}
      </div>
    );
  }
};
