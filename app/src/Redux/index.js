import rootReducer from './rootReducer';
import configureStore from './CreateStore';
import rootSaga, {api} from './rootSaga';

export default () => {
    // let { store, sagasManager, sagaMiddleware, history } = configureStore(rootReducer, rootSaga);
    return configureStore(rootReducer, rootSaga);
}