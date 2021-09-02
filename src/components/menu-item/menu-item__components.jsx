import React from 'react';
import  './menu-item.scss';
import {withRouter} from 'react-router-dom'

const MenuItems = ({title, imageUrl,size, history,linkUrl, match}) => {
    return (
        <div className={`${size} menu-item`}
        onClick = {() => history.push(`${match.url}${linkUrl}`)}
        >
        <div className="background-image" style={{
            backgroundImage:`url(${imageUrl})`
        }}>
        </div>
        <div className="content">
        <p className="title">{title.toUpperCase()}</p>
        <p className="subtitle">SHOP NOW</p>
        </div>
        </div>
    );
};

export default withRouter(MenuItems);
