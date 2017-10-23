import { call } from 'redux-saga/effects';

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

export default {
  authTeam
};
