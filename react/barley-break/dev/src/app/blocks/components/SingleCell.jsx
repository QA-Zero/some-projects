import React, { createRef } from 'react';

import '$assets/styles/SingleCell.css';


export default ({ moveCell, number, size, singleStep, direction, isAnimation }) => {
    const cellRef = createRef();

    const handleClick = () => {
        moveCell(cellRef.current, direction);
    };

    const cellTotal = {
        width: size + 'px',
        height: size + 'px'
    };
    const lvlBack = {
        lineHeight: size + 'px',
        fontSize: singleStep * 3 + 'px'
    };
    const lvlFront = {};

    let content;

    if (number === 0) {
        content = '';
        lvlBack.backgroundColor = '#aaa';
        cellTotal.zIndex = 1;
    }
    else {
        content = number;
        cellTotal.border = '2px solid #222';
        cellTotal.zIndex = 2;
        lvlBack.backgroundColor = '#77f';

        if (direction && !isAnimation) {
            const half = size / 2 - 2;

            lvlFront.borderLeft  = half + 'px solid transparent';
            lvlFront.borderRight = half + 'px solid transparent';
            lvlFront.borderTop   = half + 'px solid #55e';
            cellTotal.cursor = 'pointer';

            switch (direction) {
                case 'top': {
                    lvlFront.transform = 'rotate(180deg)';
                    break;
                }
                case 'right': {
                    lvlFront.marginTop  = half / 2 + 'px';
                    lvlFront.marginLeft = half / 2 + 'px';
                    lvlFront.transform  = 'rotate(-90deg)';
                    break;
                }
                case 'bottom': {
                    lvlFront.marginTop = half + 'px';
                    lvlFront.transform = 'rotate(0deg)';
                    break;
                }
                case 'left': {
                    lvlFront.marginTop  = half / 2 + 'px';
                    lvlFront.marginLeft =  - half / 2 + 'px';
                    lvlFront.transform  = 'rotate(90deg)';
                    break;
                }

                default: {}
            }
        }
    }

    return (
        <div
            className="cellTotal"
            style={cellTotal}
            ref={cellRef}
        >
            <div
                className="lvlBack"
                style={lvlBack}
            >{content}</div>
            <div
                className="lvlFront"
                style={lvlFront}
                onClick={handleClick}
            />
        </div>
    )
};
