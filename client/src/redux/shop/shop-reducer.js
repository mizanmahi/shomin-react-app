import {
   DATA_FETCH_START,
   DATA_FETCH_SUCCESS,
   DATA_FETCH_FAIL,
} from "./shop-action-type";

const initialState = {
   collections: null,
   loading: false,
   errorMessage: ""
};

const shopReducer = (state = initialState, { type, payload }) => {
   switch (type) {
      case DATA_FETCH_START:
         return {
            ...state,
            loading: true,
         };
      case DATA_FETCH_SUCCESS:
         return {
            ...state,
            collections: payload,
            loading: false,
         };
      case DATA_FETCH_FAIL:
         return {
            ...state,
            loading: false,
            errorMessage: payload
         };
      default:
         return state;
   }
};

export default shopReducer;
