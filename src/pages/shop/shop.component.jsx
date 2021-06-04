import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { dataFetchStart } from "../../redux/shop/shop-action";
import CollectionOverviewContainer from "../../components/collection-overview/collection-overview-container";
import CollectionPageContainer from "../../pages/collection/collection.container.component";

const ShopPage = ({ match, fetchCollections }) => {
   useEffect(() => {
      fetchCollections();
   }, [fetchCollections]);

   return (
      <div className="shop-page">
         <Route
            exact
            path={match.path}
            component={CollectionOverviewContainer}
         />
         <Route
            path={`${match.path}/:collectionId`}
            component={CollectionPageContainer}
         />
      </div>
   );
};

const mapDispatchToProps = (dispatch) => ({
   fetchCollections: () => dispatch(dataFetchStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
