import { combineReducers } from "redux";

import { categoriesReducer } from "./categories/categories.reducer";

import { cartRedcuer } from "./cart/cart.reducer";

export const rootReducer = combineReducers({
  categories: categoriesReducer,
  cart: cartRedcuer,
});
