import { takeLatest, all, call, put } from "redux-saga/effects";
import UserActionTypes from "../user/user-action-types";
import { clearCart } from "./cart-action";

function* clearCartSaga() {
   yield put(clearCart());
}

export function* onClearCartSaga() {
   yield takeLatest(UserActionTypes.SIGNOUT_SUCCESS, clearCartSaga);
}

export function* cartSagas() {
   yield all([call(onClearCartSaga)]);
}
