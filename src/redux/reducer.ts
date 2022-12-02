import { combineReducers } from '@reduxjs/toolkit';

import authReducer from './auth/authSlice';
import productReducer from './product/productSlice';
import categoryProductReducer from './product/categoryProductSlice';
import recentReducer from './recent/recentSlice';
import favoriteReducer from './favorite/favoriteSlice';
import cartReducer from './cart/cartSlice';
import detailProductReducer from './productDetail/productDetailSlice';
import commentReducer from './comment/commentSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
  category_product: categoryProductReducer,
  favorite: favoriteReducer,
  recent: recentReducer,
  cart: cartReducer,
  detailProduct: detailProductReducer,
  comment: commentReducer,
});

export default rootReducer;

export type State = ReturnType<typeof rootReducer>;
