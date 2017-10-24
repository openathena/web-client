import { eventChannel, buffers } from 'redux-saga';
import { call, all, put, spawn, takeEvery } from 'redux-saga/effects';
import ws from '../api/ws';

function createConnection() {
    // TODO: configurize
    return new WebSocket('ws://localhost:43202');
}

function createSocketChannel(socket) {
  // `eventChannel` takes a subscriber function
  // the subscriber function takes an `emit` argument to put messages onto the channel
  return eventChannel(emit => {

    socket.onmessage = function(message) {
      emit(JSON.parse(message.data));
    };

    socket.onopen = function() {
      socket.send(JSON.stringify({ type: 'OBSERVE' }));
    };

    socket.onclose = function() {
      emit({ type: 'WS_CLOSED' });
    };

    // the subscriber must return an unsubscribe function
    // this will be invoked when the saga calls `channel.close` method
    const unsubscribe = () => {
      socket.close();
    };

    return unsubscribe;
  }, buffers.sliding(10));
}

function* handleMessage({type, data}) {
  switch(type) {
    case 'HISTORY':
      yield all(data.map((message) => {
        return handleMessage(message);
      }));
      break;
    case 'EVENT':
      yield put({
        type: data.type,
        payload: { data: data.data, serverTime: data.serverTime }
      });
      break;
    case 'RESET':
      yield put({ type, data });
      break;
    case 'WS_CLOSED':
      console.error('WebSocket connection closed');
      break;
    default:
      console.log('Unknown socket message type: ' + type);
      break;
  }
}

export default function*() {
  const socket = yield call(createConnection);
  const socketChannel = yield call(createSocketChannel, socket);

  yield spawn(takeEvery, 'AUTH', ws.authTeam(socket));
  yield spawn(takeEvery, socketChannel, handleMessage);
}
