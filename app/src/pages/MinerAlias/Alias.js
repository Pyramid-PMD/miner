import React from 'react';
import {I18n} from 'react-i18next';
import AppLogo from "../../components/AppLogo/AppLogo";
import config from '../../config/app.config';
import AliasForm from "./AliasForm";

const pageStyles = {
    backgroundImage: `url(${config.brand.pageBg})`,
};

const Alias = () => {
    return (
        <I18n>
            {
                (t) => (
                    <div className="page page-alias full-height d-flex justify-content-center align-items-center" style={pageStyles}>
                        <div className="page-container">
                            <AppLogo />
                            <div className="form-container">
                                {/*<p className="text-secondary">Some intro text</p>*/}
                                <p className="text-secondary">{ t('auth:alias.desc')}</p>
                                <AliasForm />
                            </div>
                        </div>
                    </div>
                )
            }
        </I18n>
    );
};

export default Alias;