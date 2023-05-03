import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setIsCartOpen = (bool) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool);

const addCartItem = (cartStore, productToAdd) => {
  const existingCartItem = cartStore.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (existingCartItem) {
    return cartStore.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartStore, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartStore, productToRemove) => {
  const existingCartItem = cartStore.find(
    (cartItem) => cartItem.id === productToRemove.id
  );
  if (existingCartItem && existingCartItem.quantity === 1) {
    return cartStore.filter((cartItem) => cartItem.id !== productToRemove.id);
  }
  return cartStore.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartStore, productToClear) => {
  return cartStore.filter((cartItem) => cartItem.id !== productToClear.id);
};

export const addItemToCart = (cartStore, productToAdd) => {
  const newCartItems = addCartItem(cartStore, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (cartStore, productToRemove) => {
  const newCartItems = removeCartItem(cartStore, productToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const clearItemFromCart = (cartStore, productToClear) => {
  const newCartItems = clearCartItem(cartStore, productToClear);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
