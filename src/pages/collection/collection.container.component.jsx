import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import WithSpinner from "../../components/with-spinner/with-spinner";
import CollectionPage from "./collection.component";

import { selectIsCollectionLoaded } from "../../redux/shop/shop-selector";

const mapStateToProps = createStructuredSelector({
   isLoading: () =>  !selectIsCollectionLoaded,
});

const CollectionPageContainer = connect(
   mapStateToProps,
   null
)(WithSpinner(CollectionPage));

export default CollectionPageContainer;