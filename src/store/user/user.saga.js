import { all, call, takeLatest, put } from "redux-saga/effects";

import { USER_ACTION_TYPES } from "./user.types";

import {
  signUpSuccess,
  signUpFailed,
  signInSuccess,
  signInFailed,
} from "./user.action";

import {
  createUserDoc,
  createUserAuth,
} from "../../utils/firebase/firebase.utils";

export function* getSnapshotFromAuth(user, additionalDetails) {
  try {
    const userSnapshot = yield call(createUserDoc, user, additionalDetails);
    if (userSnapshot) {
      yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
    }
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* signInAfterSignUp({ payload: { user, additionalDetails } }) {
  yield call(getSnapshotFromAuth, user, additionalDetails);
}

export function* signUp({ payload: { email, password, displayName } }) {
  try {
    const userCredentials = yield call(createUserAuth, email, password);
    if (userCredentials) {
      const { user } = userCredentials;
      yield put(signUpSuccess(user, { displayName }));
    }
  } catch (error) {
    yield put(signUpFailed(error));
  }
}

export function* onSignUpSuccess() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* onSignUpStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp);
}

export function* userSaga() {
  yield all([call(onSignUpStart), call(onSignUpSuccess)]);
}
