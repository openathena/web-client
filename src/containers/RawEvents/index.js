import { connect } from 'react-redux';
import View from './View';

const mapStateToProps = (state) => ({
  rawEvents: state.reducers.rawEvents,
});

export default connect(mapStateToProps)(View);
