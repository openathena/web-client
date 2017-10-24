import { put, spawn, takeEvery } from 'redux-saga/effects';
import { push } from 'react-router-redux';

function* gameStarted(action) {
  yield put(push('/game'));
}

export default function*() {
  yield spawn(takeEvery, 'GAME_STARTED', gameStarted);
}
