import { UPDATE_COLLECTIONS } from "./ShopConstant";

export const updateCollections = collectionsMap => ({
  type: UPDATE_COLLECTIONS,
  payload: collectionsMap
});
