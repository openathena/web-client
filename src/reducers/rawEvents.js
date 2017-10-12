export default (state = [], { type, payload }) => {
  switch (type) {
    case 'websocket.incomingMessage':
      return [...state, payload];
    default:
      return state;
  }
}
