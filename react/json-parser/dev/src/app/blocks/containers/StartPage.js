import { connect as reactConnect } from 'react-redux';
import { saveUsers, push } from '$store/actions/dispatchers';
import { setPageDefault } from '$total/browser';
import StartPage from '$comp/StartPage.jsx';


const mapStateToProps = () => ({ setPageDefault });
const mapDispatchToProps = {saveUsers, push};
const connect = reactConnect(mapStateToProps, mapDispatchToProps);

export default connect(StartPage);