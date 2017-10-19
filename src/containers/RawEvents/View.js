import React from 'react';

export default class RawEventsView extends React.Component {
  render() {
    const { rawEvents } = this.props;
    return (
      <div>
        <h1>Raw websocket events</h1>
        {rawEvents && rawEvents.map((event) => (<div key={event.serverTime + '-' + Math.random()}>{JSON.stringify(event, null, '  ')}</div>))}
      </div>
    );
  }
};
