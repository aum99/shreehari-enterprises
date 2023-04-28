import { combineReducers } from "redux";

import { categoriesReducer } from "./categories/categories.reducer";

export const rootReducer = combineReducers({
  categories: categoriesReducer,
});
