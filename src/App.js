import React, { Component } from 'react';
import { Provider } from 'react-redux';
import RawEvents from './containers/RawEvents';

class App extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <RawEvents />
      </Provider>
    );
  }
}

export default App;
