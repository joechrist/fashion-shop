import React from 'react';
import './menu-item.styles.scss';

// function coponent
// All args name must be the same in directory component! -- imageURL
const MenuItem = ({ title, imageURL, size }) => (
    <div className={`${size} menu-item`}>
        <div
            className="background-image"
            style={{
                backgroundImage: `url(${imageURL})`
            }}
        />

        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
);

export default MenuItem;
