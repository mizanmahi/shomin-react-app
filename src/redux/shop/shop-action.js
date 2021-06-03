import {
   firestore,
   concertCollectionSnapshotToMap,
} from "../../firebase/firebase.utils";

import {
   DATA_FETCH_START,
   DATA_FETCH_SUCCESS,
   DATA_FETCH_FAIL,
} from "./shop-action-type";

const dataFechStart = () => {
   return {
      type: DATA_FETCH_START,
   };
};

const dataFechSuccess = (data) => {
   return {
      type: DATA_FETCH_SUCCESS,
      payload: data,
   };
};

const dataFechFail = (err) => ({ type: DATA_FETCH_FAIL, payload: err });

export const fetchCollectionData = () => {
   return (dispatch) => {
      dispatch(dataFechStart());
      const colRef = firestore.collection("collection");

      colRef
         .get()
         .then(async (snapshot) => {
            const newCollections = concertCollectionSnapshotToMap(snapshot);
            dispatch(dataFechSuccess(newCollections));
         })
         .catch((err) => dispatch(dataFechFail(err)));
   };
};

console.log(process.env);