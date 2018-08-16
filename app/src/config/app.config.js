module.exports = {
    platform: process.platform,
    title: '',
    i18n: {
        locales: ['en', 'cn'],
        languages: [
            {
                code: 'en',
                title: 'English'
            },
            {
                code: 'cn',
                title: '简体中文'
            }
        ],
        fallbackLng: {
            code: 'cn',
            title: '简体中文'
        },
        initialLang: {
            code: 'cn',
            title: '简体中文'
        },
        namespace: ['common', 'menu', 'auth', 'dashboard']
    },
    brand: {
        logo: './src/assets/img/logo.svg',
        pageBg: './src/assets/img/bg/page-bg.png',
        name: 'pyramid',
        slogan: 'Next generation decentralized protocol of storage'
    },
    currencies: [],
    disks: []
};