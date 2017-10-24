import { connect } from 'react-redux';
import View from './View';

const mapStateToProps = (state) => ({
  game: state.game,
});

export default connect(mapStateToProps)(View);
