import { connect } from 'react-redux';
import rpcActions from '../../actions/rpc';
import View from './View';
import { bindActionCreators } from 'redux';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ startGame: rpcActions.startGame }, dispatch);
}

// No need to connect()!
export default connect(null, mapDispatchToProps)(View);
