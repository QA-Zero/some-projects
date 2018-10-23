import { connect as reactConnect } from 'react-redux';
import { getTileEmoji, getTileFlagged, getGameStatus, getIsChecked } from '$store/selectors/stateAsParam';
import { flagToggle, checkTile } from '$store/actions/dispatchers';
import Tile from '$comp/game_page/board/Tile';


const mapStateToProps = (state, ownProps) => ({
	         index: ownProps.index,
	          type: getTileEmoji(state, ownProps.index),
	  isNotFlagged: !getTileFlagged(state, ownProps.index),
	isGameContinue: getGameStatus(state) === -1,
	     isChecked: getIsChecked(state, ownProps.index)
});
const mapDispatchToProps = { flagToggle, checkTile };
const connect = reactConnect(mapStateToProps, mapDispatchToProps);

export default connect(Tile);