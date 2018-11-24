import { singleStep } from '$const/cells';


export const animateCell = (cellRef, direction, steps) => {
    if (steps === 0) {
        cellRef.style.top = 0;
        cellRef.style.bottom = 0;
        cellRef.style.left = 0;
        cellRef.style.right = 0;
    }
    else {
        switch (direction) {
            case 'top': {
                cellRef.style.top = -steps * singleStep + 'px';
                cellRef.style.bottom = steps * singleStep + 'px';
                break;
            }
            case 'right': {
                cellRef.style.left = steps * singleStep + 'px';
                cellRef.style.right = -steps * singleStep + 'px';
                break;
            }
            case 'bottom': {
                cellRef.style.top = steps * singleStep + 'px';
                cellRef.style.bottom = -steps * singleStep + 'px';
                break;
            }
            case 'left': {
                cellRef.style.left = -steps * singleStep + 'px';
                cellRef.style.right = steps * singleStep + 'px';
                break;
            }

            default: {}
        }
    }
};