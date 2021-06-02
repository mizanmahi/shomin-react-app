import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import WithSpinner from "../../components/with-spinner/with-spinner";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";
// import { updateCollection } from "../../redux/shop/shop-action";
import { fetchCollectionData } from "../../redux/shop/shop-action";
import { selectLoading } from "../../redux/shop/shop-selector";

const CollectionPageWithSpinner = WithSpinner(CollectionPage);
const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);

const ShopPage = ({ match, loading, fetchCollections }) => {
  console.log(loading);

   useEffect(() => {
      fetchCollections()
   }, [fetchCollections]);

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

const mapStateToProps = createStructuredSelector({
   loading: selectLoading
})

const mapDispatchToProps = (dispatch) => ({
   fetchCollections: () => dispatch(fetchCollectionData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
