import { connect } from 'react-redux';
import View from './View';

const mapStateToProps = (state) => ({
  HexGrid: state.game.hexGrid,
});

export default connect(mapStateToProps)(View);
