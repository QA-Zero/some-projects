import { connect as reactConnect } from 'react-redux';
import { initBoardParams, push } from '$store/actions/dispatchers';
import StartPage from '$comp/start_page/StartPage';


const mapStateToProps = () => ({});
const mapDispatchToProps = { initBoardParams, push };
const connect = reactConnect(mapStateToProps, mapDispatchToProps);


export default connect(StartPage);