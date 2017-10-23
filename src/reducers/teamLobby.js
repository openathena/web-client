export default (state = { teams: [] }, { type, payload }) => {
  switch (type) {
    case 'TEAM_CREATED':
      console.log(payload);
      return { teams: [...state.teams, payload] };
    case 'RESET':
      return { teams: [] };
    default:
      return state;
  }
}
