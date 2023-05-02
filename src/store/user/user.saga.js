import { all, call, takeLatest, put } from "redux-saga/effects";

import { USER_ACTION_TYPES } from "./user.types";

import {
  signUpSuccess,
  signUpFailed,
  signInSuccess,
  signInFailed,
  signOutSuccess,
  signOutFailed,
} from "./user.action";

import {
  createUserDoc,
  createUserAuth,
  signInWithAuth,
  signOutUser,
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

export function* signIn({ payload: { email, password } }) {
  try {
    const { user } = yield call(signInWithAuth, email, password);
    if (user) {
      yield call(getSnapshotFromAuth, user);
    }
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* signOut() {
  try {
    yield call(signOutUser);
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailed(error));
  }
}

export function* onSignOutStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut);
}

export function* onSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_IN_START, signIn);
}

export function* onSignUpSuccess() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* onSignUpStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp);
}

export function* userSaga() {
  yield all([
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignInStart),
    call(onSignOutStart),
  ]);
}
