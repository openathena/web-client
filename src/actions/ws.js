import { createAction } from 'redux-actions'

export default {
  authTeam: createAction('AUTH'),
  reset: createAction('RESET')
  // 'Implicit' Actions from Game Events
  //    - TEAM_CREATED
  //    - SUBMARINE_CREATED
  //    - TILE_UPDATED
  //    - GAME_STARTED
};
