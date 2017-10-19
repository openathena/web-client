import { takeEvery, fork } from 'redux-saga/effects';
import rpc from '../api/rpc';

export default function*() {
  yield fork(takeEvery, 'CREATE_TEAM', rpc.createTeam);
  yield fork(takeEvery, 'START_GAME', rpc.startGame);
}
