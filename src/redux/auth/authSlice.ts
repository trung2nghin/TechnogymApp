import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { userInfo } from '@src/types/user-type';
import { loginThunk, logoutThunk, registerThunk } from './authThunk';

type LoginState = {
  loading?: boolean;
  userInfo?: userInfo | null;
  error?: string | null | unknown;
};

const initialState: LoginState = {
  loading: false,
  userInfo: {},
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    getUser() {},
    setUser(state, action) {
      state = action.payload;
      return state;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loginThunk.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.loading = true;
        state.userInfo = action.payload;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.error = action.payload;
      });
    builder
      .addCase(registerThunk.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.loading = true;
        state.userInfo = action.payload;
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.error = action.payload;
      });
    builder
      .addCase(logoutThunk.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(logoutThunk.fulfilled, (state, action) => {
        state.loading = true;
        state.userInfo = null;
      })
      .addCase(logoutThunk.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { getUser, setUser } = authSlice.actions;

export default authSlice.reducer;
