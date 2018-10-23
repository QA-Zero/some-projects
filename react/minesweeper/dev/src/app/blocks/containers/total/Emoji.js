import { connect as reactConnect } from 'react-redux';
import Emoji from '$comp/total/Emoji';


const mapStateToProps = (state, ownProps) => ({
	size: ownProps.size,
	type: ownProps.type
});
const mapDispatchToProps = {};
const connect = reactConnect(mapStateToProps, mapDispatchToProps);

export default connect(Emoji);