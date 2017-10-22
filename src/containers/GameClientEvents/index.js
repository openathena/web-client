import { connect } from 'react-redux';
import View from './View';

const mapStateToProps = (state) => ({
  gameClientEvents: state.reducers.gameClientEvents,
});

export default connect(mapStateToProps)(View);
