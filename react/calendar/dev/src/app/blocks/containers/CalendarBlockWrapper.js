import { connect as reactConnect } from 'react-redux'
import { getMode } from '../../logic/store_api/selectors/index.js'
import { setMode }  from '../../logic/store_api/actions/dispatchers.js'
import CalendarBlock from '../components/CalendarBlock.jsx'


const mapStateToProps = state => ({
	testParam: getMode(state),
});
const mapDispatchToProps = {
	setMode,
};
const connect = reactConnect(mapStateToProps, mapDispatchToProps);


export default connect(CalendarBlock);
