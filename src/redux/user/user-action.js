import UserActionTypes from "./user-action-types";

// GOOGLE SIGNIN ACTION CREATORS
export const googleSignInStart = () => ({
   type: UserActionTypes.GOOGLE_SIGNIN_START,
});

export const googleSignInSuccess = (user) => ({
   type: UserActionTypes.GOOGLE_SIGNIN_SUCCESS,
   payload: user,
});

export const googleSignInFailure = (err) => ({
   type: UserActionTypes.GOOGLE_SIGNIN_FAILURE,
   payload: err,
});

// EMAIL SIGNIN ACTION CREATORS
export const emailSignInStart = (emailAndPassword) => ({
   type: UserActionTypes.EMAIL_SIGNIN_START,
   payload: emailAndPassword,
});

export const emailSignInSuccess = (user) => ({
   type: UserActionTypes.EMAIL_SIGNIN_SUCCESS,
   payload: user,
});

export const emailSignInFailure = (err) => ({
   type: UserActionTypes.EMAIL_SIGNIN_FAILURE,
   payload: err,
});

// USER SESSION PERSISTING
export const checkUserSession = () => ({
   type: UserActionTypes.CHECK_USER_SESSION,
});

// SIGNOUT ACTION CREATORS
export const signoutStart = () => ({
   type: UserActionTypes.SIGNOUT_START,
});

export const signoutSuccess = () => ({
   type: UserActionTypes.SIGNOUT_SUCCESS,
});

export const signoutFailure = (err) => ({
   type: UserActionTypes.SIGNOUT_FAILURE,
   payload: err,
});

// SIGNUP ACTION CREATORS
export const signupStart = (userCredentials) => ({
   type: UserActionTypes.SIGNUP_START,
   payload: userCredentials,
});

export const signupSuccess = ({ user, additionalData }) => ({
   type: UserActionTypes.SIGNUP_SUCCESS,
   payload: { user, additionalData },
});

export const signupFailure = () => ({
   type: UserActionTypes.SIGNUP_FAILURE,
});
