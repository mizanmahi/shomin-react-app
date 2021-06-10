import {
   TOGGLE_CART,
   ADD_ITEMS,
   REMOVE_CART_ITEM,
   DECREASE_ITEM_QUANTITY,
   CLEAR_CART,
} from "./cart-action-type";
import { addItemToCart, decreaseItemQuanityFromCart } from "./cart.utils";

const initialState = {
   isHidden: true,
   cartItems: [],
};

const cartReducer = (state = initialState, { type, payload }) => {
   switch (type) {
      case TOGGLE_CART:
         return {
            ...state,
            isHidden: !state.isHidden,
         };
      case ADD_ITEMS:
         return {
            ...state,
            cartItems: addItemToCart(state.cartItems, payload),
         };
      case REMOVE_CART_ITEM:
         return {
            ...state,
            cartItems: state.cartItems.filter((item) => item.id !== payload),
         };
      case DECREASE_ITEM_QUANTITY:
         return {
            ...state,
            cartItems: decreaseItemQuanityFromCart(state.cartItems, payload),
         };
      case CLEAR_CART:
         return {
            ...state,
            cartItems: [],
         };
      default:
         return state;
   }
};

export default cartReducer;
