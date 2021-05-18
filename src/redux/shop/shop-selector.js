import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectShopData = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selecCollections = (collectionUrlParam) => {
  return createSelector(
      [selectShopData], 
      collections => collections[collectionUrlParam]
  );
};

export const selectShopCollections = createSelector(
  [selectShopData],
  collections => Object.keys(collections).map(key => collections[key])
)
