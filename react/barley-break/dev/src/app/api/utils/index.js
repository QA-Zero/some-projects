const directions = {
     1: [ 1, 4 ],
     2: [ 1, 4, -1 ],
     3: [ 1, 4, -1 ],
     4: [ 4, -1 ],
     5: [ -4, 1, 4 ],
     6: [ -4, 1, 4, -1 ],
     7: [ -4, 1, 4, -1 ],
     8: [ -4, 4, -1 ],
     9: [ -4, 1, 4 ],
    10: [ -4, 1, 4, -1 ],
    11: [ -4, 1, 4, -1 ],
    12: [ -4, 4, -1 ],
    13: [ -4, 1 ],
    14: [ -4, 1, -1 ],
    15: [ -4, 1, -1 ],
    16: [ -4, -1 ]
};
export const updateCellsDirs = (cells, emptyIndex, isGaming) => (
    cells
        .map(
            (cell, index) => cell.number === 0 ? cell : {
                ...cell,
                dirTotal: directions[index + 1]
            }
        ).map(
            (cell, index) => {
                if (index === emptyIndex) {
                    return cell;
                }
                else {
                    cell.dirCurrent = false;

                    if (isGaming) {
                        cell.dirTotal.forEach(
                            direction => {
                                if (index + direction === emptyIndex) {
                                    switch (direction) {
                                        case -4: {
                                            cell.dirCurrent = 'top';
                                            break;
                                        }
                                        case 1: {
                                            cell.dirCurrent = 'right';
                                            break;
                                        }
                                        case 4: {
                                            cell.dirCurrent = 'bottom';
                                            break;
                                        }
                                        case -1: {
                                            cell.dirCurrent = 'left';
                                            break;
                                        }

                                        default: {}
                                    }
                                }
                            }
                        );
                    }

                    return cell;
                }
            }
        )
);


export const generateCells = () => {
    const cells = [];

    for (let i = 0; i < 16; i++) {
        cells.push(
            { number: i }
        );
    }

    cells.sort(
        () => Math.random() - 0.5
    );
    // cells.splice(0, 1);
    // cells.push( { number: 0 } );

    const getEmptyIndex = () => {
        let emptyIndex = -1;

        cells.forEach(
            (cell, index) => {
                if (cell['number'] === 0) {
                    emptyIndex = index;
                }
            }
        );

        return emptyIndex;
    };
    const emptyIndex = getEmptyIndex();

    return {
        cells: updateCellsDirs(cells, emptyIndex, true),
        emptyIndex
    };
};
export const swapCells = (cells, emptyIndex, index) => {
    const temp = cells[emptyIndex];
    cells[emptyIndex] = cells[index];
    cells[index] = temp;

    return cells;
};
export const checkGameStatus = cells => {
    let result = false;

    cells.forEach(
        (cell, index) => {
            if (
                cell.number !== 0
                &&
                cell.number !== index + 1
            ) {
                result =  true;
            }
        }
    );

    return result;
};