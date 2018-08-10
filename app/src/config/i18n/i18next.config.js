const i18n = require('i18next');
const Backend = require('i18next-node-fs-backend');
const config = require('../app.config');

const i18nextOptions = {
    backend: {
        loadPath: './src/locales/{{lng}}/{{ns}}.json',
        addPath: './src/locales/{{lng}}/{{ns}}.missing.json',
        jsonIndent: 2
    },
    interpolation: {
        escapeValue: false
    },
    saveMissing: true,
    ns: config.i18n.namespace,
    fallbackLng: config.i18n.fallbackLng,
    whitelist: config.i18n.locales
};

i18n
    .use(Backend)
    .init(i18nextOptions);

module.exports = i18n;
