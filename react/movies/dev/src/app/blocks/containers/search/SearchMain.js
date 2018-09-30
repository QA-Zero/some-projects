import { connect as reactConnect } from 'react-redux';
import { getScroll, getUserRequest } from '$a/tools#/store_api/selectors/interim/search_page.js';
import { getLoading, getSearchCount, getSearchVoteAverage } from '$a/tools#/store_api/selectors/movies/total.js';
import { saveMoviesSearch } from '$a/tools#/store_api/actions/dispatchers.js';
import SearchMain from '$a/comp#/search/SearchMain.jsx';


const mapStateToProps = state => ({
	     scroll: getScroll(state),
	userRequest: getUserRequest(state),
	  isLoading: getLoading(state),
	      count: getSearchCount(state),
	voteAverage: getSearchVoteAverage(state)
});
const mapDispatchToProps = { saveMoviesSearch };
const connect = reactConnect(mapStateToProps, mapDispatchToProps);


export default connect(SearchMain);