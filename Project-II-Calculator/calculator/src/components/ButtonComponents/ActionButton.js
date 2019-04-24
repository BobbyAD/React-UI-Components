import React from 'react';
import './Button.scss';

const ActionButton = props => {
    return (
        <div className="action-button">
            <div className={props.attributes.type}>
                {props.attributes.char}
            </div>
        </div>
    )
}

export default ActionButton;