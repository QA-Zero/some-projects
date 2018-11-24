import { connect as reactConnect } from 'react-redux';
import { startGame } from '$store/actions/index';
import { getCells, getStatusAnimation, getStatusGame } from '$store/selectors/index';
import { size } from '$const/cells';
import MainPage from '$comp/MainPage';


const mergeProps = (state, dispatchProps, ownProps) => {
    const { dispatch } = dispatchProps;

    return {
                   cells: getCells(state),
             isAnimation: getStatusAnimation(state),
                isGaming: getStatusGame(state),
        startGame: () => { startGame(dispatch) },
        size,
        ...ownProps
    };
};
const connect = reactConnect(
    state => state,
    null,
    mergeProps
);


export default connect(MainPage);