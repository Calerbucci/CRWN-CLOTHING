import { createStore } from 'redux';
import {createSelector, createSelectore} from 'reselect'


const selectCart = state => state.cart;


export const selectCartItems = createSelector(
    [selectCart], (cart) => cart.cartItems
);

export const selectCartItemCount = createSelector(
    [selectCartItems], cartItems => cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity , 0)
)