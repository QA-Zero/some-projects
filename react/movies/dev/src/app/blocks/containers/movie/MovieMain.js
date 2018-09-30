import { connect as reactConnect } from 'react-redux';
import { getSearchUrl } from '$a/tools#/store_api/selectors/interim/search_page.js';
import MovieMain from '$a/comp#/movie/MovieMain.jsx';


const mapStateToProps = state => ({
	 searchUrl: getSearchUrl(state),
	parentPath: '/movie'
});
const mapDispatchToProps = {};
const connect = reactConnect(mapStateToProps, mapDispatchToProps);


export default connect(MovieMain);