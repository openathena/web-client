import { eventChannel, buffers } from 'redux-saga';
import { take, put, call, apply } from 'redux-saga/effects';
import websocket from '../websocket';
import wsActions from '../actions/websocket';

function createSocketChannel(socket) {
  // `eventChannel` takes a subscriber function
  // the subscriber function takes an `emit` argument to put messages onto the channel
  return eventChannel(emit => {
    const messageHandler = (event) => {
      // puts event payload into the channel
      // this allows a Saga to take this payload from the returned channel
      emit(event.payload);
    };

    // setup the subscription
    socket.on('message', messageHandler);

    // the subscriber must return an unsubscribe function
    // this will be invoked when the saga calls `channel.close` method
    const unsubscribe = () => {
      socket.off('message', messageHandler);
    };

    return unsubscribe;
  }, buffers.sliding(10));
}

function* handleEvent({ timestamp, event, data }) {
  const json = yield call(JSON.parse, data);
  // TODO: sort out ws events into meaningful redux actions
  yield put(wsActions.incomingMessage(json));
}

export default function*() {
  const socket = yield call(websocket.createConnection);
  const socketChannel = yield call(createSocketChannel, socket);

  while (true) {
    const payload = yield take(socketChannel);
    yield handleEvent(payload);
  }
}
