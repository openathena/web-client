import { eventChannel, buffers } from 'redux-saga';
import { take, put, call, apply } from 'redux-saga/effects';
import websocket from '../websocket';
import wsActions from '../actions/websocket';

function createSocketChannel(socket) {
  // `eventChannel` takes a subscriber function
  // the subscriber function takes an `emit` argument to put messages onto the channel
  return eventChannel(emit => {
    // setup the subscription
    socket.onmessage = emit;

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

function* handleEvent(socketEvent) {
  // TODO: sort out ws events into meaningful redux actions
  const payload = yield call(JSON.parse, socketEvent.data);
  payload.timestamp = socketEvent.timeStamp;
  yield put(wsActions.incomingMessage(payload));
}

export default function*() {
  const socket = yield call(websocket.createConnection);
  const socketChannel = yield call(createSocketChannel, socket);

  while (true) {
    const event = yield take(socketChannel);
    yield handleEvent(event);
  }
}
