import { connect as reactConnect } from 'react-redux';
import { moveCell } from '$store/actions/index';
import { size, singleStep } from '$const/cells';
import { getStatusAnimation } from '$store/selectors/index';
import SingleCell from '$comp/SingleCell';


const mergeProps = (state, dispatchProps, ownProps) => {
    const { dispatch } = dispatchProps;

    return {
        moveCell: (cellRef, direction) => moveCell(
            state,
            dispatch,
            ownProps.index,
            cellRef,
            direction
        ),
        isAnimation: getStatusAnimation(state),
        size,
        singleStep,
           number: ownProps.number,
        direction: ownProps.direction
    };
};
const connect = reactConnect(
    state => state,
    null,
    mergeProps
);


export default connect(SingleCell);