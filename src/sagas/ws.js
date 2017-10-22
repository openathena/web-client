import { eventChannel, buffers } from 'redux-saga';
import { call, all, put, fork, takeEvery } from 'redux-saga/effects';
import wsActions from '../actions/ws';
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

function* handleEvent({type, data}) {
  switch(type) {
    case 'HISTORY':
      yield all(data.map((event) => {
        return handleEvent(event);
      }));
      break;
    case 'EVENT':
      yield put({
        type: data.type,
        payload: { data: data.data, serverTime: data.serverTime }
      });
      break;
    case 'RESET':
      yield put(wsActions.reset());
      break;
    default:
      console.log('Unknown socket event: ' + { type, data });
      break;
  }
}

export default function*() {
  const socket = yield call(createConnection);
  const socketChannel = yield call(createSocketChannel, socket);

  yield fork(takeEvery, 'AUTH', ws.authTeam(socket));
  yield fork(takeEvery, socketChannel, handleEvent);
}
