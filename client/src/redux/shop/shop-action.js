import {
   firestore,
   convertCollectionSnapshotToMap,
} from "../../firebase/firebase.utils";

import {
   DATA_FETCH_START,
   DATA_FETCH_SUCCESS,
   DATA_FETCH_FAIL,
} from "./shop-action-type";

export const dataFetchStart = () => {
   return {
      type: DATA_FETCH_START,
   };
};

export const dataFetchSuccess = (data) => {
   return {
      type: DATA_FETCH_SUCCESS,
      payload: data,
   };
};

export const dataFetchFail = (err) => ({ type: DATA_FETCH_FAIL, payload: err });

export const fetchCollectionData = () => {
   return (dispatch) => {
      dispatch(dataFetchStart());
      const colRef = firestore.collection("collection");

      colRef
         .get()
         .then(async (snapshot) => {
            const newCollections = convertCollectionSnapshotToMap(snapshot);
            dispatch(dataFetchSuccess(newCollections));
         })
         .catch((err) => dispatch(dataFetchFail(err)));
   };
};
