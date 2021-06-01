import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import WithSpinner from "../../components/with-spinner/with-spinner";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";
import { firestore } from "../../firebase/firebase.utils";
import { concertCollectionSnapshotToMap } from "../../firebase/firebase.utils.js";
import { updateCollection } from "../../redux/shop/shop-action";

const CollectionPageWithSpinner = WithSpinner(CollectionPage);
const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);

const ShopPage = ({ match, updateCollection }) => {
   const [loading, setLoading] = useState(true);
   console.log(loading);

   useEffect(() => {
      const colRef = firestore.collection("collection");
      const removeSnap = colRef.onSnapshot(async (snapshot) => {
         const newCollections = concertCollectionSnapshotToMap(snapshot);
         updateCollection(newCollections);
         setLoading(false)
      });

      return () => {
         removeSnap()
      }
   }, [updateCollection]);

   return (
      <div className="shop-page">
         <Route
            exact
            path={match.path}
            render={(props) => (
               <CollectionOverviewWithSpinner
                  {...props}
                  isLoading={loading}
               />
            )}
         />
         <Route
            path={`${match.path}/:collectionId`}
            render={(props) => (
               <CollectionPageWithSpinner {...props} isLoading={loading} />
            )}
         />
      </div>
   );
};

const mapDispatchToProps = (dispatch) => ({
   updateCollection: (collection) => dispatch(updateCollection(collection)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
