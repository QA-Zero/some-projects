import { connect as reactConnect } from 'react-redux';
import { getRecCount, getRecVoteAverage } from '$a/tools#/store_api/selectors/movies/total.js';
import { saveMoviesRec } from '$a/tools#/store_api/actions/dispatchers.js';
import RecMain from '$a/comp#/movie/found-content/rec/RecMain.jsx';


const mapStateToProps = state => ({
	      count: getRecCount(state),
	voteAverage: getRecVoteAverage(state)
});
const mapDispatchToProps = { saveMoviesRec };
const connect = reactConnect(mapStateToProps, mapDispatchToProps);


export default connect(RecMain);