import { connect } from 'react-redux';
import rpcActions from '../../actions/rpc';
import View from './View';
import { bindActionCreators } from 'redux';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createTeam: rpcActions.createTeam }, dispatch);
}

export default connect(null, mapDispatchToProps)(View);
