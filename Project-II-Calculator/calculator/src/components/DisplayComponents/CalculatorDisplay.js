import React from 'react';
import './Display.scss';

const ActionButton = props => {
    return (
        <div className="display">
            {props.text}
        </div>
    )
}

export default CalculatorDisplay;