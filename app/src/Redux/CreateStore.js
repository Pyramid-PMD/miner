import { createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import createHashHistory from "history/createHashHistory";
import { connectRouter, routerMiddleware } from 'connected-react-router';
import {autoLoginSagaWatcher} from "../pages/QrCodeLogin/QrCodeLoginSaga";


export default (rootReducer, rootSaga) => {


    /* ------------- Redux Configuration ------------- */
    const middleware = [];
    const enhancers = [];


    /* ------------- Navigation History Middleware  ------------- */
    const history = createHashHistory();
    const historyMiddleware = routerMiddleware(history);
    middleware.push(historyMiddleware);

    /* ------------- Redux Observable Middleware  ------------- */
    // const rootEpic = combineEpics(
    //     pollEpic
    // );
    // const epicMiddleware = createEpicMiddleware();
    // middleware.push(epicMiddleware);

    /* ------------- Saga Middleware ------------- */
    const sagaMiddleware = createSagaMiddleware({});
    middleware.push(sagaMiddleware);


    /* ------------- Assemble Middleware ------------- */

    enhancers.push(applyMiddleware(...middleware));
    // process.env.NODE_ENV === 'development' ? enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) : null

    const store = createStore(connectRouter(history)(rootReducer), compose(...enhancers));

    // kick off root saga
    let sagasManager = sagaMiddleware.run(rootSaga);
    sagaMiddleware.run(autoLoginSagaWatcher);

    // epicMiddleware.run(rootEpic);

    return {
        store,
        sagasManager,
        sagaMiddleware,
        history
    };
}