import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';

// const i18n = require('i18next');
// const { reactI18nextModule } = require('react-i18next');

const config = require('../app.config');

const i18nextOptions = {
    ns: config.i18n.namespace,
    defaultNS: config.i18n.namespace[0],
    interpolation: {
        escapeValue: false
    },
    // TODO: Find a plugin to load resources,
    resources: {
        en: {
            common: require('../../locales/en/common.json'),
            auth: require('../../locales/en/auth.json'),
            dashboard: require('../../locales/en/dashboard.json'),
            menu: require('../../locales/en/menu.json'),
        },
        cn: {
            common: require('../../locales/cn/common.json'),
            auth: require('../../locales/cn/auth.json'),
            dashboard: require('../../locales/cn/dashboard.json'),
            menu: require('../../locales/cn/menu.json'),
        }
    },
    saveMissing: true,
    lng: config.i18n.initialLang.code,
    fallbackLng: config.i18n.fallbackLng.coe,
    whitelist: config.i18n.locales,
    react: {
        wait: true
    }
};

i18n
    .use(reactI18nextModule)
    .init(i18nextOptions);


export default i18n;