import { connect as reactConnect } from 'react-redux';
import { push } from '$store/actions/dispatchers';
import Start from '$comp/PageStart';


const mapStateToProps = () => ({});
const mapDispatchToProps = {push};
const connect = reactConnect(mapStateToProps, mapDispatchToProps);

export default connect(Start);