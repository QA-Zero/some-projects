import { connect as reactConnect } from 'react-redux';
import { getUrlId } from '$a/tools#/store_api/selectors/location/index.js';
import { saveMovieCurrent } from '$a/tools#/store_api/actions/dispatchers.js';
import CurrentMain from '$a/comp#/movie/found-content/current/CurrentMain.jsx';


const mapStateToProps = state => ({
	id: getUrlId(state)
});
const mapDispatchToProps = { saveMovieCurrent };
const connect = reactConnect(mapStateToProps, mapDispatchToProps);


export default connect(CurrentMain);