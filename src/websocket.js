
export default {
  createConnection() {
    // TODO: configurize
    return new WebSocket('ws://localhost:43202');
  },
};
