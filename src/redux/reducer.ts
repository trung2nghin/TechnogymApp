import { combineReducers } from '@reduxjs/toolkit';

import authReducer from './auth/authSlice';
import productReducer from './product/productSlice';
import categoryProductReducer from './product/categoryProductSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
  category_product: categoryProductReducer,
});

export default rootReducer;

export type State = ReturnType<typeof rootReducer>;
