import { eventChannel, buffers } from 'redux-saga';
import { take, put, call, all } from 'redux-saga/effects';
import websocket from '../websocket';
import wsActions from '../actions/websocket';

const HISTORY = 'HISTORY';
const EVENT = 'EVENT';

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

function* handleEvent({type, data}) {
  switch(type) {
    case HISTORY:
      yield all(data.map((event) => {
        return handleEvent(event);
      }));
      break;
    case EVENT:
      yield put(wsActions.incomingMessage(data));
  }
}

export default function*() {
  const socket = yield call(websocket.createConnection);
  const socketChannel = yield call(createSocketChannel, socket);

  while (true) {
    const event = yield take(socketChannel);
    yield handleEvent(event);
  }
}
