import { put, call } from 'redux-saga/effects';
import AliasActions from './AliasRedux';
import { replace } from 'connected-react-router';

export function * createAliasSaga(api, action) {
    const { alias } = action;
    const res = yield call(api.createMinerAlias, alias);
    if (res) {
        if (res.data.code === "0") {
            yield put(AliasActions.aliasSuccess());
            yield put(replace('/dashboard'));
        } else {
            yield put(AliasActions.aliasFailure('error'));
        }
    }
}