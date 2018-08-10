import React from 'react';
import { NavLink } from 'react-router-dom';
import { I18n } from 'react-i18next';

const MenuFooter = ({ alias }) => {
    return (
        <I18n>
            {
                (t) => (
                    <div className="text-small d-flex align-items-center justify-content-center">
                        <span className="text-secondary text-capitalize mr-1">{ t('auth:alias.title')}: { alias }</span>
                        <NavLink to="/dashboard/settings" className="form-link form-link-small">
                            { t('common:interface.update')}
                        </NavLink>
                        {/*<button className="btn form-link form-link-small">{ t('common:interface.update')}</button>*/}
                    </div>
                )
            }
        </I18n>
    )
}

export default MenuFooter;