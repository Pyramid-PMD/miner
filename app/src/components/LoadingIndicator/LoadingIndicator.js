import React from 'react';
const LoadingIndicator = (props) => {
    const { show } = props;
    return (
        show ?
        <div className="page-loading-indicator d-flex justify-content-center align-items-center">
            <img src="./src/assets/img/loaders/oval.svg"/>
        </div> : null
    );
};

export default LoadingIndicator;

