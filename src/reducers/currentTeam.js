export default (state = { id: '', submarine: {} }, { type, payload }) => {
  switch (type) {
    case 'AUTH':
      return {
        id: payload.username,
        submarine: state.submarine
      };
    case 'SUBMARINE_UPDATED':
      return {
        id: state.id,
        submarine: payload.data
      };
    default:
      return state;
  }
}
