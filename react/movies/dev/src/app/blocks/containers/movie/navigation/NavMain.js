import { connect as reactConnect } from 'react-redux';
import NavMain from '$a/comp#/movie/navigation/NavMain.jsx';
import { getUrlBase, getUrlId } from '$a/tools#/store_api/selectors/location/index.js';


const mapStateToProps = (state, ownProps) => ({
	currentPath: getUrlBase(state),		// need for component update after redirect
			 id: getUrlId(state),
	 parentPath: ownProps.parentPath
});
const mapDispatchToProps = {};
const connect = reactConnect(mapStateToProps, mapDispatchToProps);


export default connect(NavMain);