import UserActionTypes from "./user-action-types";

const initialSate = {
   currentUser: null,
   error: null,
};

const userReducer = (state = initialSate, { type, payload }) => {
   switch (type) {
      case UserActionTypes.GOOGLE_SIGNIN_SUCCESS:
      case UserActionTypes.EMAIL_SIGNIN_SUCCESS:
         return {
            ...state,
            currentUser: payload,
            error: null,
         };
      case UserActionTypes.GOOGLE_SIGNIN_FAILURE:
      case UserActionTypes.EMAIL_SIGNIN_FAILURE:
         return {
            ...state,
            error: payload,
         };
      case UserActionTypes.SIGNOUT_START:
         return state;
      case UserActionTypes.SIGNOUT_SUCCESS:
         return {
            ...state,
            currentUser: null,
            error: null,
         };
      case UserActionTypes.SIGNOUT_FAILURE:
         return {
            ...state,
            error: payload,
         };
      case UserActionTypes.SIGNUP_SUCCESS:
         return {
            ...state,
            currentUser: payload,
         };
      case UserActionTypes.SIGNUP_FAILURE:
         return {
            ...state,
            currentUser: null,
            error: payload,
         };
      default:
         return state;
   }
};

export default userReducer;
