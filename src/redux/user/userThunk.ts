import { createAsyncThunk } from '@reduxjs/toolkit';

import UserAPI from '@src/api/UserAPI';
import { userInfo } from '@src/types';

export const getUserThunk = createAsyncThunk(
  'user/getUser',
  async (payload: userInfo, thunkApi) => {
    try {
      const response = await UserAPI.requestGetUser({
        user: payload,
        id: payload.myInfo?._id,
      });
      return response.data;
    } catch (error: any) {
      const message = error.message;
      return thunkApi.rejectWithValue(message);
    }
  },
);

export const updateUserThunk = createAsyncThunk(
  'updateUser/putUpdateUser',
  async ({ user, info }: { user: userInfo; info: userInfo }, thunkApi) => {
    try {
      const response = await UserAPI.requestUpdateUser({ user, info });
      return response.data;
    } catch (error: any) {
      const message = error.message;
      return thunkApi.rejectWithValue(message);
    }
  },
);
