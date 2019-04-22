import React from 'react';
import moment from 'moment';
import './Header.scss';

const HeaderTitle = () => {
    return (
        <div className="title-wrapper">
            <div className="author">
                <h4>Lambda School</h4>
            </div>
            <div className="twitter">
                <p>@LambdaSchool</p>
            </div>
            <div className="date">
                <p>{moment().format("MMM Do")}</p>
            </div>
        </div>
    )
}

export default HeaderTitle;