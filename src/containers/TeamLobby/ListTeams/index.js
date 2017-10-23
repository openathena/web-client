import { connect } from 'react-redux';
import View from './View';

const mapStateToProps = (state) => ({
  teamLobby: state.reducers.teamLobby,
});

export default connect(mapStateToProps)(View);
