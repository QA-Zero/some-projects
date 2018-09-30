import { connect as reactConnect } from 'react-redux';
import { getRecItems } from '$a/tools#/store_api/selectors/movies/total.js';
import RecGrid from '$a/comp#/movie/found-content/rec/RecGrid.jsx';


const mapStateToProps = state => ({
	movies: getRecItems(state)
});
const mapDispatchToProps = {};
const connect = reactConnect(mapStateToProps, mapDispatchToProps);


export default connect(RecGrid);