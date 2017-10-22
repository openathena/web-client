import { createAction } from 'redux-actions'

export default {
  incomingGameEvent: createAction('INCOMING_GAME_EVENT'),
  authTeam: createAction('AUTH'),
  reset: createAction('RESET')
  // 'Implicit' Actions from Game Events
  //    - TEAM_CREATED
  //    - SUBMARINE_CREATED
  //    - TILE_UPDATED
};
