import { connect } from 'react-redux';
import View from './View';

const mapStateToProps = (state) => ({
  rawEvents: state.rawEvents,
});

export default connect(mapStateToProps)(View);
