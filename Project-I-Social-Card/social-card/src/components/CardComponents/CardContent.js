import React from 'react';
import './Card.scss';

const CardContent = () => {
    return <div className="card-content">
        <div className="card-title">
            <h3>Get started with React</h3>
        </div>
        <div className="card-body">
            <p>React makes it painless to create interactive UIs. Design simple views for each state in your application.</p>
        </div>
        <div className="link-text">
            <p>reactjs.org</p>
        </div>
    </div>
}

export default CardContent;