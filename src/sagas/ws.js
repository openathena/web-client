import { eventChannel, buffers } from 'redux-saga';
import { call, fork, takeEvery } from 'redux-saga/effects';
import ws from '../api/ws';

function createConnection() {
    // TODO: configurize
    return new WebSocket('ws://localhost:43202');
}

function createSocketChannel(socket) {
  // `eventChannel` takes a subscriber function
  // the subscriber function takes an `emit` argument to put messages onto the channel
  return eventChannel(emit => {
    // setup the subscription
    socket.onmessage = function(socketEvent) {
      emit(JSON.parse(socketEvent.data));
    };

    socket.onopen = function() {
      socket.send(JSON.stringify({ type: 'OBSERVE' }));
    };

    // the subscriber must return an unsubscribe function
    // this will be invoked when the saga calls `channel.close` method
    const unsubscribe = () => {
      socket.close();
    };

    return unsubscribe;
  }, buffers.sliding(10));
}

export default function*() {
  const socket = yield call(createConnection);
  const socketChannel = yield call(createSocketChannel, socket);

  yield fork(takeEvery, 'AUTH', ws.authTeam(socket));
  yield fork(takeEvery, socketChannel, ws.handleEvent);
}
