import React from 'react';
import { I18n } from "react-i18next";

const ComingSoon = (props) => {
    return (
        <I18n>
            {
                (t) => (
                    <li className="exchange-list-item d-flex align-items-end justify-content-center">
                        <p className="text-secondary text-center">{ t('common:interface.comingSoon')}</p>
                    </li>
                )
            }

        </I18n>

    );
};

export default ComingSoon;