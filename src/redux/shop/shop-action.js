import { UPDATE_COLLECTIONS } from "./shop-action-type";

export const updateCollection = (collections) => ({
    type: UPDATE_COLLECTIONS,
    payload: collections
})