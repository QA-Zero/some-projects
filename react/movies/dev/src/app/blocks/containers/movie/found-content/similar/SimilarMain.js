import { connect as reactConnect } from 'react-redux';
import { getUrlId } from '$a/tools#/store_api/selectors/location/index.js';
import { getSimilarCount, getVotesSimilar } from '$a/tools#/store_api/selectors/movies/total.js';
import { saveMoviesSimilar } from '$a/tools#/store_api/actions/dispatchers.js';
import SimilarMain from '$a/comp#/movie/found-content/similar/SimilarMain.jsx';


const mapStateToProps = state => ({
           id: getUrlId(state),
	    count: getSimilarCount(state),
	votesInfo: getVotesSimilar(state)
});
const mapDispatchToProps = { saveMoviesSimilar };
const connect = reactConnect(mapStateToProps, mapDispatchToProps);


export default connect(SimilarMain);