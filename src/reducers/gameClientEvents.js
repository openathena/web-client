export default (state = [], { type, payload }) => {
  switch (type) {
    case 'RESET':
      return [];
    default:
      return [...state, { type, payload }];
  }
}
