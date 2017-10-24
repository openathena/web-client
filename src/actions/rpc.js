import { createAction } from 'redux-actions';
import dispatchAction from './dispatchAction';

export default {
  createTeam: dispatchAction(createAction('CREATE_TEAM')),
  startGame: function(_, dispatch) {
    dispatch(createAction('START_GAME')());
  }
};
