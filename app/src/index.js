import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';

import App from "./App";
import i18n from './config/i18n/i18next.client.config';

import createStore from './Redux';

const { store, history } = createStore();

// let initialI18nStore = ipcRenderer.sendSync(ipcMessages.i18n.getInitialTrans);

ReactDOM.render(
    <Provider store={store}>
        <I18nextProvider i18n={i18n}>
            <App history={history} />
        </I18nextProvider>
    </Provider>

    ,
    document.getElementById('app')
);
