import { connect } from 'react-redux';
import View from './View';

const mapStateToProps = (state) => ({
  currentTeam: state.game.currentTeam,
  teams: state.game.teams
});

export default connect(mapStateToProps)(View);
