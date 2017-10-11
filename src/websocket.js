import io from 'socket.io-client';

export default {
  createConnection() {
    // TODO: configurize
    return io('ws://localhost:43202');
  },
};
