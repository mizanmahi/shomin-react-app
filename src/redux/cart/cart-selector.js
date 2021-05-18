import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartIsHidden = createSelector(
    [selectCart],
    cart => cart.isHidden
) 

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)

export const selectCartItemQuantity = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((acc, curr) => acc += curr.quantity, 0)
)

export const selectTotalPrice = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((acc, currentItem) => acc += currentItem.quantity * currentItem.price , 0)
)