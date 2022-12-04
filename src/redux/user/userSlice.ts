import { createSlice } from '@reduxjs/toolkit';

import { userInfo } from '@src/types';
import { updateUserThunk } from './userThunk';

type UserState = {
  loading?: boolean;
  userProfile: userInfo | null;
  error?: string | null | unknown;
};

const initialState: UserState = {
  loading: false,
  userProfile: {},
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(updateUserThunk.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(updateUserThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.userProfile = action.payload;
      })
      .addCase(updateUserThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
