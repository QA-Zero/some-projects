import { connect as reactConnect } from 'react-redux';
import { startGame, push } from '$store/actions/dispatchers';
import GamePage from '$comp/game_page/GamePage';


const mapStateToProps = () => ({});
const mapDispatchToProps = { startGame, push };
const connect = reactConnect(mapStateToProps, mapDispatchToProps);

export default connect(GamePage);