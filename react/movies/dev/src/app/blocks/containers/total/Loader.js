import { connect as reactConnect } from 'react-redux';
import { getLoading } from '$a/tools#/store_api/selectors/movies/total.js';
import Loader from '$a/comp#/total/Loader.jsx';


const mapStateToProps = (state, ownProps) => ({
	isLoading: getLoading(state),
	    style: ownProps.style,
	    count: ownProps.count,
	     vote: ownProps.vote
});
const mapDispatchToProps = {};
const connect = reactConnect(mapStateToProps, mapDispatchToProps);


export default connect(Loader);