import { loginType, registerType } from '@src/types/auth-type';
import { userInfo } from '@src/types/user-type';
import AxiosClient from '../axiosClient';

const AuthAPI = {
  async requestLogin(payload: loginType) {
    return await AxiosClient(`auth/login`, {
      method: 'POST',
      data: payload,
    });
  },

  async requestRegister(payload: registerType) {
    return await AxiosClient(`auth/register`, {
      method: 'POST',
      data: payload,
    });
  },

  async requestLogout(payload: userInfo) {
    return await AxiosClient(`auth/logout`, {
      method: 'POST',
      headers: {
        token: `Bearer ${payload?.accessToken}`,
      },
    });
  },

  async requestRefreshToken() {
    return await AxiosClient(`auth/refresh`, {
      method: 'POST',
      withCredentials: true,
    });
  },
};

export default AuthAPI;
