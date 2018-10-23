import { connect as reactConnect } from 'react-redux';
import { getBoardRows } from '$store/selectors/stateAsParam';
import GameBoard from '$comp/game_page/board/GameBoard';


const mapStateToProps = state => ({
	rows: getBoardRows(state)
});
const mapDispatchToProps = {};
const connect = reactConnect(mapStateToProps, mapDispatchToProps);

export default connect(GameBoard);