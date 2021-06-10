import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectShopData = createSelector(
   [selectShop],
   (shop) => shop.collections
);

export const selecCollections = (collectionUrlParam) => {
   return createSelector([selectShopData], (collections) =>
      collections ? collections[collectionUrlParam] : null
   );
};

export const selectShopCollections = createSelector(
   [selectShopData],
   (collections) =>
      collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectLoading = createSelector(
   [selectShop],
   (shop) => shop.loading
);

export const selectIsCollectionLoaded = createSelector(
   [selectShop],
   (shop) => !!shop.collections
);
