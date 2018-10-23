import { connect as reactConnect } from 'react-redux';
import { getGameStatus, getStartTime } from '$store/selectors/stateAsParam';
import GameTimer from '$comp/game_page/footer/GameTimer';


const mapStateToProps = state => ({
	     startTime: getStartTime(state),
	isGameContinue: getGameStatus(state) === -1
});
const mapDispatchToProps = {};
const connect = reactConnect(mapStateToProps, mapDispatchToProps);

export default connect(GameTimer);