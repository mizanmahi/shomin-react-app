import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionOverview from "./collection-overview.component";
import WithSpinner from "../with-spinner/with-spinner";

import { selectLoading } from "../../redux/shop/shop-selector";

const mapStateToProps = createStructuredSelector({
   isLoading: selectLoading,
});

const CollectionOverviewContainer = connect(mapStateToProps)(
   WithSpinner(CollectionOverview)
);

export default CollectionOverviewContainer;
