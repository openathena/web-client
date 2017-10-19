import { createAction } from 'redux-actions'

export default {
  incomingGameEvent: createAction('INCOMING_GAME_EVENT'),
  authTeam: createAction('AUTH_TEAM')
};
