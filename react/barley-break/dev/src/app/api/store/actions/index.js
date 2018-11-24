import {
    START_NEW_GAME,
    UPDATE_CELLS,
    START_ANIMATION,
    FINISH_ANIMATION
} from '$const/actionTypes';
import { getCells, getEmptyIndex } from '$store/selectors/index';
import { steps, delay } from '$const/cells';
import { animateCell } from '$ui/index'
import { generateCells, swapCells, updateCellsDirs, checkGameStatus } from '$utils/index';


const startNewGame = dispatch => {
    dispatch({
        type: START_NEW_GAME
    });
};
const updateCells = (dispatch, cells, emptyIndex) => {
    dispatch({
        type: UPDATE_CELLS,
        cells,
        emptyIndex
    });
};
const startAnimation = dispatch => {
    dispatch({
        type: START_ANIMATION
    });
};
const finishAnimation = (dispatch, isGaming) => {
    dispatch({
        type: FINISH_ANIMATION,
        isGaming
    });
};


export const startGame = dispatch => {
    const cellsInfo = generateCells();

    startNewGame(dispatch);
    updateCells(dispatch, cellsInfo.cells, cellsInfo.emptyIndex);
};
export const moveCell = (state, dispatch, index, cellRef, direction) => {
    const animating = async () => {
        await new Promise(
            resolve => {
                const loop = currentStep => {
                    currentStep++;
                    startAnimation(dispatch);
                    animateCell(cellRef, direction, currentStep);

                    if (currentStep < steps) {
                        setTimeout(
                            () => {
                                loop(currentStep)
                            },
                            delay
                        )
                    }
                    else {
                        animateCell(cellRef, direction, 0);
                        resolve();
                    }
                };
                loop(0);
            }
        );

        const swappedCells = swapCells(
            JSON.parse(JSON.stringify(getCells(state))),
            getEmptyIndex(state),
            index
        );
        const isGaming = checkGameStatus(swappedCells);
        const updatedCells = updateCellsDirs(swappedCells, index, isGaming);

        finishAnimation(dispatch, isGaming);
        updateCells(dispatch, updatedCells, index);
    };

    animating().then();
};