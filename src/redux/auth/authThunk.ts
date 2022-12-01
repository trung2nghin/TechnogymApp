import { createAsyncThunk } from '@reduxjs/toolkit';

import AuthAPI from '@src/api/AuthAPI';
import { loginType, registerType } from '@src/types/auth-type';
import { userInfo } from '@src/types';

export const loginThunk = createAsyncThunk(
  'login/postLogin',
  async (payload: loginType, thunkApi) => {
    try {
      const response = await AuthAPI.requestLogin(payload);
      return response.data;
    } catch (error: any) {
      const message = error.message;
      return thunkApi.rejectWithValue(message);
    }
  },
);

export const registerThunk = createAsyncThunk(
  'register/postRegister',
  async (payload: registerType, thunkApi) => {
    try {
      const response = await AuthAPI.requestRegister(payload);
      return response.data;
    } catch (error: any) {
      const message = error.message;
      return thunkApi.rejectWithValue(message);
    }
  },
);

export const logoutThunk = createAsyncThunk(
  'logout/postLogout',
  async (payload: userInfo | null, thunkApi) => {
    try {
      const response = await AuthAPI.requestLogout(payload);
      return response.data;
    } catch (error: any) {
      const message = error.message;
      return thunkApi.rejectWithValue(message);
    }
  },
);
