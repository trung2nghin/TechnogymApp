import { combineReducers } from '@reduxjs/toolkit';

import counterReducer from './counter/counterSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;

export type State = ReturnType<typeof rootReducer>;
