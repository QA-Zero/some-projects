import { connect as reactConnect } from 'react-redux';
import { getBdImg } from '$a/tools#/store_api/selectors/movies/current.js';
import BackdropContainer from '$a/comp#/movie/found-content/current/BackdropContainer.jsx';


const mapStateToProps = state => ({
	bdImg: getBdImg(state)
});
const mapDispatchToProps = {};
const connect = reactConnect(mapStateToProps, mapDispatchToProps);


export default connect(BackdropContainer);