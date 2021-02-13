import {createSelector} from 'reselect'

//select the whole user state
const selectShop = state => state.shop;

// select the current user from the whole user state
export const selectCollections = createSelector(
    [selectShop], (shop) => shop.collections
);

export const selectCollectionForPreview = createSelector(
    [selectCollections], collections => collections ? Object.keys(collections).map(key => collections[key]) : []
)

export const selectCollection = collectionUrlParam => createSelector(
    [selectCollections], (collections => collections? collections[collectionUrlParam]: null)

)