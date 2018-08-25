import React from 'react';
const path = require('path');

const ExchangeIndexItem = (props) => {
    const { name, price } = props.exchangeItem;
    const { currency } = props;

    const styles = {
        backgroundImage: `url(./src/assets/img/pages/overview/bg-${name}.png)`
    };

    return (
        <li className="exchange-list-item d-flex align-items-center" style={styles}>
            <img src={`./src/assets/img/pages/overview/icon-${name}.png`}/>
            <div>
                <p className="text-secondary">{ name }</p>
                <p className="number">{ price } <span className="text-small text-uppercase">{currency.name }</span></p>
            </div>
        </li>
    );
};

export default ExchangeIndexItem;