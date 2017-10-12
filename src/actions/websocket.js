// TODO: use redux-actions lib

export default {
  incomingMessage: (payload) => ({
    type: 'websocket.incomingMessage',
    payload: payload,
  }),
};
