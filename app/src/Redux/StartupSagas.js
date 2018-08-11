import { put, call } from 'redux-saga/effects';
import LoginActions from '../pages/Login/LoginRedux';
import StartupActions from './StartupRedux';
import {getDiskId} from "../Services/Utils";

export function * checkAuthStatus(api, action) {
    console.log('checking auth status');
    // Get saved user and token
    const token = yield localStorage.getItem('token');
    const user = yield JSON.parse(localStorage.getItem('user'));
    // Transform apis to include token in header
    const diskId = yield call(getDiskId);
    if (diskId) {
        console.log('disk id', diskId);
        yield api.instance.addRequestTransform(request => {
            request.headers['disk_id'] = diskId;
        });
    }

    if (!token) {
        yield put(LoginActions.loginFailure())
    } else {
        yield api.instance.addRequestTransform(request => {
            request.headers['token'] = token;
            request.headers['uid'] = user.uid;
        });
        yield put(LoginActions.loginSuccess(user))
    }
}

export function measureUploadSpeed() {
    const settings = {
        endpoint:  'http://101.132.161.0/server.php',
        upload: {
            data: {
                // The amount of data to initially use.
                size:  1 * 1024 * 1024, // 2 MB in 172.492 s
                multiplier: 2
            }
        }
    };
    const net = new Network(settings);

    return new Promise((resolve, reject) => {
        net.upload
            .on('start', function(dataSize) {
        })
            .on('end', function(averageSpeed) {
                resolve(Math.floor(averageSpeed / 1024));
            }).start();
    });
}

export function * pollMinerSaga(api) {
    const speed = yield measureUploadSpeed() || 168;
    const res = yield call(api.pollMiner, speed);
    if (res.data.code === "0") {
        yield put(StartupActions.pollMinerSuccess())
    } else {
        switch (res.data.code) {

        }
        yield put(StartupActions.pollMinerFailure('error'));
    }

}
//
// export function * pollMinerSagaWatcher() {
//     while (true) {
//         yield take(StartupTypes.pollMinerRequest);
//         yield race([
//             call(pollMinerSaga),
//             take(StartupTypes.pollMinerStop)
//         ]);
//     }
// }
//
// export const pollEpic = action$ => {
//     action$.ofType(StartupTypes.pollMinerRequest)
//
//         // .switchMap(() =>
//         //     Observable.timer(0, 4000)
//         //         .takeUntil(action$.ofType(StartupTypes.pollMinerStop))
//         //         .exhaustMap(() =>
//         //             // action.api.pollMiner(action.speed)
//         //             Observable.ajax({ url: '/', crossDomain: true })
//         //                 .map(res => StartupActions.pollMinerSuccess())
//         //                 .catch(error => Observable.of(StartupActions.pollMinerFailure(error)))
//         //         )
//         // );
// };
