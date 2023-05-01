import { combineReducers } from "redux";

import { categoriesReducer } from "./categories/categories.reducer";

import { cartRedcuer } from "./cart/cart.reducer";

import { userReducer } from "./user/user.reducer";

export const rootReducer = combineReducers({
  categories: categoriesReducer,
  cart: cartRedcuer,
  user: userReducer,
});
