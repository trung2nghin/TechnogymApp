import { combineReducers } from '@reduxjs/toolkit';

import authReducer from './auth/authSlice';
import productReducer from './product/productSlice';
import categoryProductReducer from './product/categoryProductSlice';
import recentReducer from './recent/recentSlice';
import favoriteReducer from './favorite/favoriteSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
  category_product: categoryProductReducer,
  favorite: favoriteReducer,
  recent: recentReducer,
});

export default rootReducer;

export type State = ReturnType<typeof rootReducer>;
