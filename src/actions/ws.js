import { createAction } from 'redux-actions'
import dispatchAction from './dispatchAction';

export default {
  authTeam: dispatchAction(createAction('AUTH')),
  // 'Implicit' Actions from Game Events
  //    - TEAM_CREATED
  //    - SUBMARINE_CREATED
  //    - TILE_UPDATED
  //    - GAME_STARTED
};
