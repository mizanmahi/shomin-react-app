import { takeLatest, call, put } from "redux-saga/effects";
import { DATA_FETCH_START } from "./shop-action-type";
import { dataFetchSuccess, dataFetchFail } from "./shop-action";
import {
   firestore,
   convertCollectionSnapshotToMap,
} from "../../firebase/firebase.utils";

export function* fetchCollectionAsync() {
   try {
      const colRef = firestore.collection("collection");
      const snapshot = yield colRef.get();
      // call() is used to call some function which can take a bit time
      const collectioMap = yield call(convertCollectionSnapshotToMap, snapshot);
      yield put(dataFetchSuccess(collectioMap))
   } catch (err) {
       // in saga put is used to dispatch action
       yield put(dataFetchFail(err))
   }
}

export function* fetchCollectionStart() {
   yield takeLatest(DATA_FETCH_START, fetchCollectionAsync);
}
