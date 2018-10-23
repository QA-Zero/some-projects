import { connect as reactConnect } from 'react-redux';
import { getUrlBase, getUrlQuery, getUrlFull } from '$a/tools#/store_api/selectors/location/index.js';
import { saveSearchInfo, push } from '$a/tools#/store_api/actions/dispatchers.js';
import SearchBox from '$a/comp#/search/SearchBox.jsx';


const mapStateToProps = state => ({
	 urlBase: getUrlBase(state),
	urlQuery: getUrlQuery(state),
	 urlFull: getUrlFull(state)
});
const mapDispatchToProps = {saveSearchInfo, push};
const connect = reactConnect(mapStateToProps, mapDispatchToProps);


export default connect(SearchBox);