// import React from "react";
import { connect } from "react-redux";
import { selecCollections } from "../../redux/shop/shop-selector";

import CollectionItem from "../../components/collection-tem/collection-item.component";

import "./collection.style.scss";

const CollectionPage = ({ collections }) => {
   const { items, title } = collections;
   return (
      <div className="collection-page">
         <span className="title">{title}</span>
         <div className="items">
            {items.map((item) => (
               <CollectionItem item={item} key={item.id} />
            ))}
         </div>
      </div>
   );
};

const mapStateToProps = (state, ownProps) => {
   // ownProps is the components original normal props in this case its passed by the Route
   return {
      collections: selecCollections(ownProps.match.params.collectionId)(state),
   };
};

export default connect(mapStateToProps)(CollectionPage);
