export default (state = [], { type, payload }) => {
  switch (type) {
    case 'INCOMING_GAME_EVENT':
      return [...state, payload];
    case 'RESET':
      return [];
    default:
      return state;
  }
}
