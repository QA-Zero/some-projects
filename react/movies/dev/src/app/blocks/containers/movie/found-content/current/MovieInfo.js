import { connect as reactConnect } from 'react-redux';
import { getTitle, getDescr, getMainImg } from '$a/tools#/store_api/selectors/movies/current.js';
import MovieInfo from '$a/comp#/movie/found-content/current/MovieInfo.jsx';


const mapStateToProps = state => ({
	   itle: getTitle(state),
	  descr: getDescr(state),
	mainImg: getMainImg(state)
});
const mapDispatchToProps = {};
const connect = reactConnect(mapStateToProps, mapDispatchToProps);


export default connect(MovieInfo);