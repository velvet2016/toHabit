import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import {habitsRequested, habitsLoaded} from '../redux/actions';
import HabitsService from '../services/HabitsService';

const habitsService = new HabitsService();


export function* sagaWatcher() {
    yield takeEvery('FETCH_HABITS', sagaWorker)
}

function* sagaWorker() {
    yield put(habitsRequested());
    const payload = yield call(habitsService.getHabits);
    yield put(habitsLoaded(payload))

}




//     try {
//         const user = yield call(Api.fetchUser, action.payload.userId);
//         yield put({type: "USER_FETCH_SUCCEEDED", user: user});
//     } catch (e) {
//         yield put({type: "USER_FETCH_FAILED", message: e.message});
//     }
// }
//
// /*
//   Запускаем `fetchUser` на каждое задиспатченное действие `USER_FETCH_REQUESTED`.
//   Позволяет одновременно получать данные пользователей.
// */
// function* mySaga() {
//     yield takeEvery("USER_FETCH_REQUESTED", fetchHabits);
// }
//
// /*
//   В качестве альтернативы вы можете использовать `takeLatest`.
//
//   Не допускает одновременное получение данных пользователей. Если `USER_FETCH_REQUESTED`
//   диспатчится в то время когда предыдущий запрос все еще находится в ожидании ответа,
//   то этот ожидающий ответа запрос отменяется и срабатывает только последний.
// */
// function* mySaga() {
//     yield takeLatest("USER_FETCH_REQUESTED", fetchHabits);
// }

// export default fetchHabits;