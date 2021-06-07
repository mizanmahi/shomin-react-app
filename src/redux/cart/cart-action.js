import {
   TOGGLE_CART,
   ADD_ITEMS,
   REMOVE_CART_ITEM,
   DECREASE_ITEM_QUANTITY,
   CLEAR_CART,
} from "./cart-action-type";

export const toggleCart = () => ({
   type: TOGGLE_CART,
});

export const addItem = (item) => ({
   type: ADD_ITEMS,
   payload: item,
});

export const removeCartItem = (itemId) => ({
   type: REMOVE_CART_ITEM,
   payload: itemId,
});

export const decreaseCartItem = (item) => ({
   type: DECREASE_ITEM_QUANTITY,
   payload: item,
});

export const clearCart = () => ({
   type: CLEAR_CART,
});
