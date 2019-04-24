import React from 'react';
import './Button.scss';

const NumberButton = props => {
    return (
        <div className="number-button">
            <div className={props.attributes.type}>
                {props.attributes.char}
            </div>
        </div>
    )
}

export default NumberButton;