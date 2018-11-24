import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

import SingleCell from '$cont/SingleCell';

import '$assets/styles/MainPage.css';


export default class MainPage extends Component {
    handleRestart = () => {
        const { startGame } = this.props;
        startGame();
    };


    constructor(props) {
        super(props);
        props.startGame();
    }

    render() {
        const { isAnimation, isGaming, cells, size } = this.props;
        const stylesStatus = {};
        let statusValue;

        if (isGaming) {
            statusValue = 'Gaming...';
            stylesStatus.color = '#00a';
        }
        else {
            statusValue = 'Winner!';
            stylesStatus.color = '#0a0';
        }

        const stylesField = {
             width: (size * 4 + 2 * 3) + 'px',
            height: (size * 4 + 2 * 3) + 'px'
        };

        if (isAnimation) {
            stylesField.cursor = 'wait';
        }

        return (
            <div className="mainPage">
                <div
                    className="status"
                    style={stylesStatus}
                >{statusValue}</div>
                <div
                    className="field"
                    style={stylesField}
                >
                    {
                        cells.map(
                            (cell, index) => <SingleCell
                                key={index}
                                index={index}
                                number={cell.number}
                                direction={cell.dirCurrent}
                            />
                        )
                    }
                </div>
                <Button
                    className="btnRestart"
                    onClick={this.handleRestart}
                >Restart</Button>
            </div>
        )
    };
}