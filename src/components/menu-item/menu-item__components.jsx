import React from 'react';
import  './menu-item.scss';

const MenuItems = ({title, imageUrl,size}) => {
    return (
        <div className={`${size} menu-item`}
        style={{
            backgroundImage:`url(${imageUrl})`
        }}
        >
        <div className="content">
        <p className="title">{title}</p>
        <p className="subtitle">SHOP NOW</p>
        </div>
        </div>
    )
}

export default MenuItems
