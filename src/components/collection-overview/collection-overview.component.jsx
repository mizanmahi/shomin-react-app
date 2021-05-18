import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopCollections } from "../../redux/shop/shop-selector";

import CollectionPreview from "../collection-preview/collection-preview.component";

import './collection-ovrview.style.scss';

const CollectionOverview = ({ collections }) => {
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherCollectionParams }) => {
        return <CollectionPreview key={id} {...otherCollectionParams} />;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections,
});

export default connect(mapStateToProps)(CollectionOverview);
