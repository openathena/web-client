export default (state = [], { type, payload }) => {
  switch (type) {
    case 'INCOMING_GAME_EVENT':
      return [...state, payload];
    default:
      return state;
  }
}
