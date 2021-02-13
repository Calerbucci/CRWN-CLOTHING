import ShopActionTypes from './shop-type';

export const updateColections = (collectionMap) => ({
    type: ShopActionTypes.UPDATE_COLLECTIONS,
    payload: collectionMap
})