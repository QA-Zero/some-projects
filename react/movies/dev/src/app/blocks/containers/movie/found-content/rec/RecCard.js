import { connect as reactConnect } from 'react-redux';
import RecCard from '$a/comp#/movie/found-content/rec/RecCard.jsx';


const mapStateToProps = (state, ownProps) => ({
	     id: ownProps.id,
	  title: ownProps.title,
	  descr: ownProps.descr,
	mainImg: ownProps.mainImg
});
const mapDispatchToProps = {};
const connect = reactConnect(mapStateToProps, mapDispatchToProps);


export default connect(RecCard);