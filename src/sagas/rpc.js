import { takeEvery, spawn } from 'redux-saga/effects';
import rpc from '../api/rpc';

export default function*() {
  yield spawn(takeEvery, 'CREATE_TEAM', rpc.createTeam);
  yield spawn(takeEvery, 'START_GAME', rpc.startGame);
}
