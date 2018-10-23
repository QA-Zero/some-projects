import { connect as reactConnect } from 'react-redux';
import { getMinesLeft } from '$store/selectors/stateAsParam';
import MinesLeft from '$comp/game_page/footer/FlagsLeft';


const mapStateToProps = state => ({
	minesLeft: getMinesLeft(state)
});
const mapDispatchToProps = {};
const connect = reactConnect(mapStateToProps, mapDispatchToProps);

export default connect(MinesLeft);