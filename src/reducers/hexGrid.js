export default (state = [], { type, payload }) => {
  switch (type) {
    case 'TILE_UPDATED':
      return [...state, payload.data];
    case 'RESET':
      return [];
    default:
      return state;
  }
}
