import React from 'react';
import { NavLink } from 'react-router-dom';



const MenuItem = ({ icon, url, title, exact}) => {
    return (
        <NavLink to={url} className="main-menu-item" exact={exact}>
            <div className="d-flex align-items-center">
                <span className={`icon icon-${icon}`}>
                </span>
                <span>{title}</span>
            </div>
        </NavLink>
    )
};

export default MenuItem;