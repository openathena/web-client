import React from 'react';

export default class GameClientEventsView extends React.Component {
  render() {
    const { gameClientEvents } = this.props;
    return (
      <div>
        <h2>Game Client Events</h2>
        {gameClientEvents && gameClientEvents.map((event) => (<div key={Math.random()}>{JSON.stringify(event, null, '  ')}</div>))}
      </div>
    );
  }
};
