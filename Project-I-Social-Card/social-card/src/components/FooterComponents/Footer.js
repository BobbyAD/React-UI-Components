import React from 'react';
import './Footer.scss';

const Footer = () => {
    return <div className="footer-content">
        <div className="footer-item">
            <i class="far fa-comment"></i>
        </div>
        <div className="footer-item">
            <i class="fas fa-sync"></i> <p> 6</p>
        </div>
        <div className="footer-item">
            <i class="far fa-heart"></i> <p> 4</p>
        </div>
        <div className="footer-item">
            <i class="far fa-envelope"></i>
        </div>
    </div>
}

export default Footer;