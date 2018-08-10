import React, {Component} from 'react';
import { I18n} from 'react-i18next';
import IconButton from "../../../../components/IconButton/IconButton";
import NetworkIndicator from "../NetworkIndicator/NetworkIndicator";


const PageHeader = () => {
    return (
        <I18n>
            {
                (t) => (
                    <header className="has-separator page-header d-flex justify-content-between">
                        <div>
                            <h1 className="text-uppercase">{ t('common:brand.name')}</h1>
                            <p className="text-secondary">{ t('common:brand.slogan')}</p>
                        </div>
                        <NetworkIndicator />
                    </header>
                )
            }
        </I18n>
    )
};

export default PageHeader;