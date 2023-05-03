import { CART_ACTION_TYPES } from "./cart.types";

const INITIAL_STATE = {
  isCartOpen: false,
  cartStore: [],
};

export const cartRedcuer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        cartStore: payload,
      };
    default:
      return state;
  }
};
