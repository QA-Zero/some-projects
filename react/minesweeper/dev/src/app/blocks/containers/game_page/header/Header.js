import { connect as reactConnect } from 'react-redux';
import { getGameStatus } from '$store/selectors/stateAsParam';
import Header from '$comp/game_page/header/Header';


const mapStateToProps = state => ({
	status: getGameStatus(state)
});
const mapDispatchToProps = {};
const connect = reactConnect(mapStateToProps, mapDispatchToProps);

export default connect(Header);