import AxiosClient from '../AxiosClient';
import { userInfo } from '@src/types';

const UserAPI = {
  async requestGetUser(payload: userInfo) {
    return await AxiosClient(`user/find/${payload.myInfo?._id}`, {
      method: 'GET',
      headers: {
        token: `Bearer ${payload?.accessToken}`,
      },
    });
  },

  async requestUpdateUser({ user, info }: { user: userInfo; info: userInfo }) {
    return await AxiosClient(`user/${user.myInfo?._id}`, {
      method: 'PUT',
      data: info,
      headers: {
        token: `Bearer ${user?.accessToken}`,
      },
    });
  },
};

export default UserAPI;
