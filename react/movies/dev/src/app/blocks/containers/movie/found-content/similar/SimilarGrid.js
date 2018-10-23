import { connect as reactConnect } from 'react-redux';
import { getSimilarItems } from '$a/tools#/store_api/selectors/movies/total.js';
import SimilarGrid from '$a/comp#/movie/found-content/similar/SimilarGrid.jsx';


const mapStateToProps = state => ({
	movies: getSimilarItems(state)
});
const mapDispatchToProps = {};
const connect = reactConnect(mapStateToProps, mapDispatchToProps);


export default connect(SimilarGrid);