// TODO: use redux-actions lib

export default {
  incomingMessage: (data) => ({
    type: 'websocket.incomingMessage',
    payload: { data },
  }),
};
