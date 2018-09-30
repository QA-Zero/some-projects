import { connect as reactConnect } from 'react-redux';
import { getSearchItems } from '$a/tools#/store_api/selectors/movies/total.js';
import SearchGrid from '$a/comp#/search/SearchGrid.jsx';


const mapStateToProps = state => ({
	movies: getSearchItems(state)
});
const mapDispatchToProps = {};
const connect = reactConnect(mapStateToProps, mapDispatchToProps);


export default connect(SearchGrid);