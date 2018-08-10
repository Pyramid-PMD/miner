import React from 'react';


const IconButton = ({ name }) => {
    return (
        <button className="icon-button text-secondary d-flex align-items-center justify-content-center">
            <span className={`icon icon-${name} d-flex align-items-center justify-content-center`}>
            </span>
        </button>
    );
};

export default IconButton;