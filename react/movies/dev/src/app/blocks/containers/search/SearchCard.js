import { connect as reactConnect } from 'react-redux';
import { saveScroll } from '$a/tools#/store_api/actions/dispatchers.js';
import SearchCard from '$a/comp#/search/SearchCard.jsx';


const mapStateToProps = (state, ownProps) => ({
	     id: ownProps.id,
	  title: ownProps.title,
	  descr: ownProps.descr,
	mainImg: ownProps.mainImg
});
const mapDispatchToProps = {saveScroll};
const connect = reactConnect(mapStateToProps, mapDispatchToProps);


export default connect(SearchCard);