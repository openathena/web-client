export default (state = [], { type, payload }) => {
  switch (type) {
    case 'websocket.incomingMessage':
      return [...state, JSON.parse(payload.data)];
    default:
      return state;
  }
}
