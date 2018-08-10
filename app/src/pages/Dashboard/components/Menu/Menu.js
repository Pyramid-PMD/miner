import React from 'react';
import { I18n } from 'react-i18next';
import MenuItem from "./MenuItem";
import MenuHeader from "./MenuHeader";
import MenuFooter from "./MenuFooter";

const Menu = (props) => {
    return (
        <I18n>
            {
                (t) => (
                    <nav className="main-menu d-flex flex-column">
                        <div>
                            <MenuHeader balance={ props.balance } currency={ props.currency }/>
                        </div>
                        <div className="main-menu-links">
                            <ul className="list-unstyled">
                                <li>
                                    <MenuItem title={t('menu:overview')} url="/dashboard" exact={true} icon="overview"/>
                                </li>
                                <li>
                                    <MenuItem title={t('menu:transactions')} url="/dashboard/transactions" icon="transactions"/>
                                </li>

                                <li>
                                    <MenuItem title={t('menu:miner')} url="/dashboard/miner"  icon="miner"/>
                                </li>
                                <li>
                                    <MenuItem title={t('menu:profit')} url="/dashboard/profit" icon="profit" />
                                </li>
                                <li>
                                    <MenuItem title={t('menu:withdraw')} url="/dashboard/withdraw" icon="withdraw" />
                                </li>
                                <li>
                                    <MenuItem title={t('menu:notifications')} url="/dashboard/notifications" icon="notification" />
                                </li>
                            </ul>

                            <ul className="list-unstyled">
                                <li>
                                    <MenuItem title={t('menu:settings')} url="/dashboard/settings" icon="setting" />
                                </li>
                                <li>
                                    <MenuItem title={t('menu:faqs')} url="/dashboard/faqs" icon="faq" />
                                </li>
                            </ul>
                        </div>

                        <div style={{marginTop: 'auto'}}>
                            <MenuFooter alias={ props.alias }/>
                        </div>

                    </nav>
                )
            }
        </I18n>

    );
}

export default Menu;