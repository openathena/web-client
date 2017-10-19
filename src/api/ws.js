import { call, put, all } from 'redux-saga/effects';
import wsActions from '../actions/ws';

function authTeam(socket) {
  return function* (action) {
    const authRequest = yield call(
      JSON.stringify,
      { type: action.type, data: action.payload }
    );
    console.log(authRequest);
    yield call([socket, socket.send], authRequest);
  };
}

function* handleEvent({type, data}) {
  switch(type) {
    case 'HISTORY':
      yield all(data.map((event) => {
        return handleEvent(event);
      }));
      break;
    case 'EVENT':
      yield put(wsActions.incomingGameEvent(data));
      break;
    default:
      console.log('Unknown socket event: ' + { type, data });
      break;
  }
}



export default {
  authTeam,
  handleEvent
};
