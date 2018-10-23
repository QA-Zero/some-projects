import { connect as reactConnect } from 'react-redux';
import SimilarCard from '$a/comp#/movie/found-content/similar/SimilarCard.jsx';


const mapStateToProps = (state, ownProps) => ({
	     id: ownProps.id,
	  title: ownProps.title,
	  descr: ownProps.descr,
	mainImg: ownProps.mainImg
});
const mapDispatchToProps = {};
const connect = reactConnect(mapStateToProps, mapDispatchToProps);


export default connect(SimilarCard);