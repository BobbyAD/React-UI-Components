import React from 'react';
import './Display.scss';

const CalculatorDisplay = props => {
    return (
        <div className="display">
            <div className="content">
                {props.text}
            </div>
        </div>
    )
}

export default CalculatorDisplay;