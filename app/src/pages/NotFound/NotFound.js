import React from 'react';
import { I18n } from 'react-i18next';

const NotFound = () => {
    return (
        <I18n>
            {
                (t) => (
                    <div>page not found</div>
                )
            }
        </I18n>
    );
}

export default NotFound;