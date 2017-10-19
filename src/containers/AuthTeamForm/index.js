import { connect } from 'react-redux';
import wsActions from '../../actions/ws';
import View from './View';
import { bindActionCreators } from 'redux';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ authTeam: wsActions.authTeam }, dispatch);
}

// No need to connect()!
export default connect(null, mapDispatchToProps)(View);
