import { call, put } from 'redux-saga/effects';

function postRpc(action) {
  // TODO configurize host
  return fetch('http://localhost:43201/rpc', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ type: action.type, data: action.payload })
  });
}


function* createTeam(action) {
  try {
    const response = yield call(postRpc, action);
    const { teamId } = yield response.json();
    yield put({ type: "CREATE_TEAM_SUCCEEDED", teamId });
    // TODO auto auth
  } catch (e) {
    yield put({ type: "CREATE_TEAM_FAILED", message: e.message })
  }
}

function* startGame(action) {
  try {
    const response = yield call(postRpc, action);
    console.log(response);
  } catch (e) {
    yield put({ type: "START_GAME_FAILED", message: e.message })
  }
}

export default {
  createTeam,
  startGame
};