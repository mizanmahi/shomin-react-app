import { put, call, all, takeLatest } from "redux-saga/effects";
import UserActionTypes from "./user-action-types";
import {
   googleSignInSuccess,
   googleSignInFailure,
   emailSignInSuccess,
   emailSignInFailure,
   signoutSuccess,
   signoutFailure,
   signupFailure,
   signupSuccess,
} from "./user-action";

import {
   googleProvider,
   auth,
   createUserProfileDocument,
   getCurrentUser,
} from "../../firebase/firebase.utils";

// google sign in start task
function* googleSignInSaga() {
   try {
      const { user } = yield auth.signInWithPopup(googleProvider);
      const userRef = yield call(createUserProfileDocument, user);
      const userSnapShot = yield userRef.get();
      yield put(
         googleSignInSuccess({ id: userSnapShot.id, ...userSnapShot.data() })
      );
   } catch (err) {
      yield put(googleSignInFailure(err));
   }
}

// email sign in start task
function* emailSignInSaga({ payload: { email, password } }) {
   // here we get the entire action by which this task was fired

   try {
      const { user } = yield auth.signInWithEmailAndPassword(email, password);
      const userRef = yield call(createUserProfileDocument, user);
      const userSnapShot = yield userRef.get();
      yield put(
         emailSignInSuccess({ id: userSnapShot.id, ...userSnapShot.data() })
      );
   } catch (err) {
      put(emailSignInFailure(err));
   }
}

// user persisting task
function* isUserAuthenticated() {
   try {
      const userAuth = yield getCurrentUser();
      if (!userAuth) return;
      const userRef = yield call(createUserProfileDocument, userAuth);
      const userSnapShot = yield userRef.get();
      yield put(
         emailSignInSuccess({ id: userSnapShot.id, ...userSnapShot.data() })
      );
   } catch (err) {
      yield put(emailSignInFailure(err));
   }
}

// signout task
function* signoutSaga() {
   try {
      yield auth.signOut();
      yield put(signoutSuccess());
   } catch (err) {
      yield put(signoutFailure(err));
   }
}

// signup task
function* signupSaga({ payload: { email, password, displayName } }) {
   try {
      const { user } = yield auth.createUserWithEmailAndPassword(
         email,
         password
      );
      yield put(signupSuccess({ user, additionalData: { displayName } }));
   } catch (err) {
      yield put(signupFailure(err));
   }
}

// signin task on signup
function* signinAfterSignup({ payload: { user, additionalData } }) {
   try {
      const userRef = yield call(createUserProfileDocument, user, additionalData);
      const userSnapShot = yield userRef.get();
      yield put(
         emailSignInSuccess({ id: userSnapShot.id, ...userSnapShot.data() })
      );
   } catch (err) {
      put(emailSignInFailure(err));
   }
}

export function* googleSignInStartSaga() {
   yield takeLatest(UserActionTypes.GOOGLE_SIGNIN_START, googleSignInSaga);
}

export function* emailSignInStartSaga() {
   yield takeLatest(UserActionTypes.EMAIL_SIGNIN_START, emailSignInSaga);
}

export function* checkUserSessionSaga() {
   yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* signoutStartSaga() {
   yield takeLatest(UserActionTypes.SIGNOUT_START, signoutSaga);
}

export function* signupStartSaga() {
   yield takeLatest(UserActionTypes.SIGNUP_START, signupSaga);
}

export function* onSignupSuccessSaga() {
   yield takeLatest(UserActionTypes.SIGNUP_SUCCESS, signinAfterSignup);
}

export function* userSagas() {
   yield all([
      call(googleSignInStartSaga),
      call(emailSignInStartSaga),
      call(checkUserSessionSaga),
      call(signoutStartSaga),
      call(signupStartSaga),
      call(onSignupSuccessSaga)
   ]);
}
