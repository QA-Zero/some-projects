import { connect as reactConnect } from 'react-redux';
import { getMoves } from '$store/selectors/stateAsParam';
import MovesCount from '$comp/game_page/footer/MovesCount';


const mapStateToProps = state => ({
	moves: getMoves(state)
});
const mapDispatchToProps = {};
const connect = reactConnect(mapStateToProps, mapDispatchToProps);

export default connect(MovesCount);