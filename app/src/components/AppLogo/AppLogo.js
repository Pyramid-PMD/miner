import React from 'react';
import { I18n } from 'react-i18next';
import config from '../../config/app.config';

const AppLogo = () => {
    return (
        <I18n>
            {
                (t) => (
                    <div className="app-logo">
                        <img src={config.brand.logo} alt="App logo"/>
                        <p className="text-uppercase text-center">{config.brand.name}</p>
                    </div>
                )
            }
        </I18n>
    )
};

export default AppLogo;