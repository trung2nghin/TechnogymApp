import { combineReducers } from '@reduxjs/toolkit';

import authReducer from './auth/authSlice';
import productReducer from './product/productSlice';
import categoryProductReducer from './product/categoryProductSlice';
import recentReducer from './recent/recentSlice';
import favoriteReducer from './favorite/favoriteSlice';
import cartReducer from './cart/cartSlice';
import detailProductReducer from './productDetail/productDetailSlice';
import commentReducer from './comment/commentSlice';
import userReducer from './user/userSlice';
import searchReducer from './search/searchSlice';
import conversationReducer from './chat/chatConversationSlice';
import messageReducer from './chat/messageSlice';
import homeReducer from './home/homeSlice'

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  product: productReducer,
  category_product: categoryProductReducer,
  favorite: favoriteReducer,
  recent: recentReducer,
  cart: cartReducer,
  detailProduct: detailProductReducer,
  comment: commentReducer,
  search: searchReducer,
});

export default rootReducer;

export type State = ReturnType<typeof rootReducer>;
