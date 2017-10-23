export default (state = [], { type, payload }) => {
  switch (type) {
    case 'TEAM_CREATED':
      return [...state, payload.data];
    case 'RESET':
      return [];
    default:
      return state;
  }
}
